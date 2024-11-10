import dynamicLinks from '@react-native-firebase/dynamic-links';
import {deepLink, dynamicLink, fallbackUrl, packageName} from '../../Constants';
import {push, ref, set} from 'firebase/database';
import {store} from '../../Store/store';
import {database} from './firebaseConfig';

/**
 * Handles dynamic links when the app is in the background or opened via a dynamic link.
 * - Retrieves the initial link that opened the app.
 * - Sets up a listener to capture any dynamic links when the app is running.
 */
export const handleDynamicLinks = () => {
  // Retrieve the initial dynamic link that opened the app
  dynamicLinks()
    .getInitialLink()
    .then(link => {
      if (link) {
        console.log('App opened from a dynamic link:', link.url);
        // Handle the initial link (e.g., navigate to a specific screen based on the link)
      }
    });

  // Listen for dynamic links while the app is running in the background
  dynamicLinks().onLink(link => {
    console.log('App opened from a dynamic link while running:', link.url);
    // Handle the dynamic link (e.g., navigate to a specific screen based on the link)
  });
};

/**
 * Creates a dynamic link for a product, which can be shared with others.
 *
 * @param {string} id - The unique identifier for the product.
 * @returns {string} - The generated short dynamic link for the product.
 */
export async function createDynamicLink(id) {
  try {
    return await dynamicLinks().buildShortLink({
      link: `${deepLink}/productdetail?id=${id}`, // Deep link to the product's detail page
      domainUriPrefix: dynamicLink, // The domain prefix for the dynamic link
      android: {
        packageName: packageName, // Package name for the Android app
        minimumVersion: '1', // Minimum app version to handle the link
        fallbackUrl: fallbackUrl, // Fallback URL if the app is not installed
      },
    });
  } catch (error) {
    console.error('Error creating dynamic link:', error);
    throw new Error('Unable to create dynamic link. Please try again.');
  }
}

/**
 * Adds a shared product to the Firebase Realtime Database under the current user's shared products.
 * This data is used for tracking products that the user has shared.
 *
 * @param {Object} sharedProduct - The product data to be shared.
 */
export async function addSharedProductToDatabase(sharedProduct) {
  const {token} = store.getState().auth;

  if (!token) {
    console.warn('User token is missing. Cannot share product.');
    return;
  }

  try {
    const sharedProductsPath = `user_activities/${token}/shared_products/`; // Path to store shared products
    const sharedProductRef = ref(database, sharedProductsPath); // Reference to the shared products node in the database
    const newSharedProductRef = push(sharedProductRef); // Create a new entry for the shared product

    // Set the shared product data in Firebase Realtime Database
    await set(newSharedProductRef, sharedProduct);
  } catch (error) {
    console.error(
      'Failed to add shared product to Firebase Realtime Database:',
      error,
    );
    throw new Error('Unable to share product. Please try again.');
  }
}
