import moment from 'moment';

import {TYPES} from '../TYPES';
import {store} from '../store';
import {
  addItemToCartInDatabase,
  clearCartFromDatabase,
  removeItemFromCartDatabase,
} from '../../services/Firebase/databaseServices';
import {getUpdatedCartState} from '../../services/cart';

const {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ALL_CART_ITEMS,
  CLEAR_CART_ITEMS,
} = TYPES;

/**
 * Action creator to add item to cart
 *
 * @param {Array} cartItems - Items in the cart
 * @param {Array} idToCartItems - Mapping of item ids to cart items
 * @returns {Object} action
 */
export const addItemToCart = (cartItems, idToCartItems) => ({
  type: ADD_ITEM_TO_CART,
  payload: {cartItems: cartItems, idToCartItems: idToCartItems},
});

/**
 * Handles add-to-cart button press, updating the cart state and database
 *
 * @param {Object|Array} product - The product to be added
 * @param {Array} idToCartItems - Mapping of item ids to cart items
 * @returns {Function} dispatch action
 */
export const handleAddToCartPress =
  (product, idToCartItems) => async dispatch => {
    if (Array.isArray(product)) {
      dispatch(addItemToCart(product, idToCartItems));
    } else {
      const itemBody = {
        id: product.id,
        product_quantity: 1,
        added_at: moment.now(),
      };
      await addItemToCartInDatabase(itemBody);
    }
  };

/**
 * Removes an item from the cart asynchronously
 *
 * @param {string} itemId - The id of the item to remove
 * @returns {Function} dispatch action
 */
export const removeCartItemAsyncAction = itemId => async dispatch => {
  try {
    const {idToCartItems: ids} = store.getState().cartItems;

    await removeItemFromCartDatabase(ids[itemId]);

    const {updatedCartItems: cartItems, updatedIdToCartItems: idToCartItems} =
      getUpdatedCartState(itemId);

    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: {
        cartItems,
        idToCartItems,
      },
    });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

/**
 * Clears all items from the cart
 *
 * @returns {Function} dispatch action
 */
export const clearCart = () => async dispatch => {
  try {
    await clearCartFromDatabase();
    dispatch({type: REMOVE_ALL_CART_ITEMS, payload: []});
  } catch (error) {
    throw error;
  }
};

/**
 * Clears cart items from the local state (without affecting the database)
 *
 * @returns {Object} action
 */
export const clearCartItems = () => ({type: CLEAR_CART_ITEMS});
