import {store} from '../Store/store';
import {getUpdatedItem} from '../Utils/helpers';
import {updateCartItemInDatabase} from './Firebase/databaseServices';

/**
 * Get the updated cart state after removing an item.
 * This function filters out the item from both `cartItems` and `idToCartItems` and returns the updated states.
 * @param {string} itemId - The ID of the item to be removed from the cart.
 * @returns {object} - An object containing `updatedCartItems` and `updatedIdToCartItems`.
 */
export const getUpdatedCartState = itemId => {
  const {cartItems, idToCartItems} = store.getState().cartItems;

  // Find the index of the item to remove
  const removedItemIndex = cartItems.findIndex(item => item.id === itemId);

  // Filter out the removed item from both cart items and id-to-cart-items mapping
  const updatedCartItems = cartItems.filter(item => item.id !== itemId);
  const updatedIdToCartItems = idToCartItems.filter(
    (_, index) => index !== removedItemIndex,
  );

  return {
    updatedCartItems,
    updatedIdToCartItems,
  };
};

/**
 * Set the quantity of an item in the cart.
 * This function updates the quantity of a specified cart item and updates the database accordingly.
 * @param {string} id - The ID of the item whose quantity needs to be updated.
 * @param {number} quantityChange - The change in quantity (can be positive or negative).
 * @returns {Promise<void>} - Returns a promise that resolves when the item quantity is successfully updated.
 * @throws Will throw an error if the update fails.
 */
export const setCartItemQuantity = async (id, quantityChange) => {
  const {updatedItem, id_} = getUpdatedItem(id, quantityChange);
  try {
    // Update the item in the database
    await updateCartItemInDatabase(id_, updatedItem);
  } catch (error) {
    // Log and throw an error if the update fails
    console.error('Error updating item quantity:', error);
    throw error;
  }
};
