import {
  ref,
  onValue,
  get,
  getDatabase,
  set,
  update,
  remove,
  push,
  onDisconnect,
} from 'firebase/database';
import {database} from './firebaseConfig';

import {fetchProducts, searchHistory} from '../../Store/Actions';
import {store} from '../../Store/store';
import {handleAddToCartPress} from '../../Store/Actions/cartItemsActions';
import {products} from '../../Utils/Data';

// Define references for user activity and connection status
const connectedRef = ref(database, '.info/connected');
const presenceRef = ref(database, 'disconnectmessage');

/**
 * Initializes real-time database listeners for connectivity status and offline mode.
 * Listens to Firebase `.info/connected` reference to monitor connection state.
 */
export const initializeRealtimeDatabaseListeners = () => {
  onValue(connectedRef, snap => enableOfflineConnection(snap));
};

/**
 * Subscribes to user activities in the database.
 * Listens for changes in user-specific activities and dispatches updates accordingly.
 *
 * @param {string} token - The user's unique token.
 * @param {Function} dispatch - Redux dispatch function to update store with new data.
 * @returns {Function} - Returns the unsubscribe function to stop listening.
 */
export const subscribeToUserActivities = (token, dispatch) => {
  const dbRef = ref(database, `user_activities/${token}/`);
  return onValue(dbRef, snapshot =>
    processUserActivityData(snapshot, dispatch),
  );
};

/**
 * Fetches the product list from Firebase and dispatches them to the Redux store.
 *
 * @param {Function} dispatch - Redux dispatch function to update the store with products.
 */
export const fetchProductsFromFirebase = async dispatch => {
  try {
    const productsRef = ref(database, 'products/');
    const snapshot = await get(productsRef);

    if (snapshot.exists()) {
      const productList = snapshot.val();
      dispatch(fetchProducts(productList));
    } else {
      console.log('No products found in Firebase.');
    }
  } catch (error) {
    console.error('Error fetching products from Firebase:', error);
  }
};

/**
 * Writes user data (name, email, avatar URL) to the Firebase Realtime Database.
 *
 * @param {string} userId - The user's unique ID.
 * @param {string} name - The user's name.
 * @param {string} email - The user's email.
 * @param {string} avatar_url - The user's avatar URL.
 */
export async function writeUserData(userId, name, email, avatar_url = '') {
  const body = {
    name,
    email,
    avatar_url,
  };
  const db = getDatabase();
  const path = 'users/' + userId;
  set(ref(db, path), body).then();
}

/**
 * Updates a specific field in the user's data at the given path.
 *
 * @param {string} userId - The user's unique ID.
 * @param {string} path - The path where the data needs to be updated.
 * @param {Object} body - The data to update.
 */
export function updateUser(userId, path, body) {
  const db = getDatabase();
  const updates = {};
  updates['/users/' + userId + '/' + path] = body;

  return update(ref(db), updates);
}

/**
 * Adds a search history entry to the Firebase Realtime Database for the current user.
 *
 * @param {Object} body - The search history data.
 */
export async function add_History(body) {
  try {
    const {token} = store.getState().auth;
    const path = 'user_activities/' + token + '/search_history/';
    const dbRef = push(ref(database, path));
    await set(dbRef, body).then();
  } catch (error) {
    throw error;
  }
}

/**
 * Removes a search history entry by ID from the Firebase Realtime Database.
 *
 * @param {string} id - The ID of the search history entry to be removed.
 */
export async function remove_History(id) {
  try {
    const {token} = store.getState().auth;
    const path = 'user_activities/' + token + '/search_history/' + id;
    await remove(ref(database, path));
  } catch (error) {
    throw error;
  }
}

/**
 * Removes an item from the cart in the Firebase Realtime Database.
 *
 * @param {string} itemId - The ID of the item to be removed from the cart.
 */
export async function removeItemFromCartDatabase(itemId) {
  try {
    const {token} = store.getState().auth;
    const path = `user_activities/${token}/cart/${itemId}`;
    await remove(ref(database, path));
  } catch (error) {
    console.error('Error removing item from database:', error);
    throw error;
  }
}

/**
 * Adds a shared product to the Firebase Realtime Database.
 *
 * @param {Object} sharedProduct - The product data to be shared.
 */
export async function setSharedProductInFRTD(sharedProduct) {
  const {token} = store.getState().auth;
  const path = `user_activities/${token}/shared_products/`;
  const sharedProductRef = ref(database, path);
  const newShareProductRef = push(sharedProductRef);
  await set(newShareProductRef, sharedProduct).then();
}

/**
 * Updates the quantity or other data of an item in the cart in Firebase.
 *
 * @param {string} id - The ID of the cart item to update.
 * @param {Object} itemData - The updated cart item data.
 */
export const updateCartItemInDatabase = async (id, itemData) => {
  const {token} = store.getState().auth;
  const updates = {
    [`user_activities/${token}/cart/${id}`]: itemData,
  };
  await update(ref(database), updates);
};

/**
 * Clears the entire cart from the Firebase Realtime Database for the current user.
 */
export const clearCartFromDatabase = async () => {
  const {token} = store.getState().auth;
  try {
    await remove(ref(database, `user_activities/${token}/cart/`));
  } catch (error) {
    throw error;
  }
};

/**
 * Adds an item to the cart in the Firebase Realtime Database for the current user.
 *
 * @param {Object} cartItem - The cart item to be added.
 */
export async function addItemToCartInDatabase(cartItem) {
  const {token} = store.getState().auth;
  if (!token) {
    console.warn('User token is missing. Cannot add item to cart.');
    return;
  }

  try {
    const cartPath = `user_activities/${token}/cart/`;
    const cartRef = ref(database, cartPath);
    const cartItemRef = push(cartRef);
    await set(cartItemRef, cartItem);
  } catch (error) {
    console.error(
      'Failed to add item to cart in Firebase Realtime Database:',
      error,
    );
    throw new Error('Unable to add item to cart. Please try again.');
  }
}

/**
 * Adds a list of products to the Firebase Realtime Database under the 'products' node.
 *
 * @param {Array} productsList - The list of products to be added to the database.
 */
export function addProductInDatabase(productsList) {
  set(ref(database, 'products/'), productsList).then();
}

/**
 * Handles the connection status and presence for the user.
 * Enables or disables offline mode based on Firebase connectivity status.
 *
 * @param {Object} snap - The snapshot containing the connection status.
 */
export const enableOfflineConnection = async snap => {
  if (snap.val() === true) {
    console.log('connected');
    await onDisconnect(presenceRef).cancel();
  } else {
    console.log('not connected');
    onDisconnect(presenceRef);
  }
};
/*Need to work on it*/
/**
 * Processes the user activity data received from Firebase.
 * Updates the store with the user's search history and cart items.
 *
 * @param {Object} snapshot - The snapshot containing the user's activity data.
 * @param {Function} dispatch - Redux dispatch function to update store with user activities.
 */
export function processUserActivityData(snapshot, dispatch) {
  if (!snapshot.exists()) {
    console.log('No data available');
    return;
  }

  const {cart = {}, search_history = {}} = snapshot.val();

  // Process search history
  if (search_history) {
    const searchHistoryKeys = Object.keys(search_history);
    const searchHistoryValues = Object.values(search_history);
    dispatch(searchHistory(searchHistoryValues, searchHistoryKeys));
  }

  // Process cart items
  if (cart) {
    const cartItems = mergeCartWithProducts(Object.values(cart));
    const cartItemIds = Object.keys(cart);
    dispatch(handleAddToCartPress(cartItems, cartItemIds));
  }
}

/**
 * Merges cart items with the available product data to enrich the cart items.
 *
 * @param {Array} cartItems - The list of cart items to be merged with product data.
 * @returns {Array} - The merged list of cart items with additional product data.
 */
function mergeCartWithProducts(cartItems) {
  return cartItems
    .map(cartItem => {
      const product = products.find(p => p.id === cartItem.id);
      if (product) {
        return {
          ...product,
          product_quantity: cartItem.product_quantity,
          added_at: cartItem.added_at,
        };
      }
      return null;
    })
    .filter(item => item !== null); // Filter out any null values if no matching product is found
}
