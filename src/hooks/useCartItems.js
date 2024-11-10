import {useSelector} from 'react-redux';

/**
 * Custom hook to access cart-related data from the Redux store.
 *
 * This hook retrieves properties from the cart state, such as the list of cart items
 * and a mapping of item IDs to their details. It provides an easy way for components
 * to access cart data without directly interacting with the Redux store.
 *
 * @returns {Object} Cart state properties:
 * @property {Array} cartItems - List of items currently in the cart.
 * @property {Array} idToCartItems - Mapping of item IDs to cart item details.
 */
const useCartItems = () => {
  const {cartItems = [], idToCartItems = []} = useSelector(
    state => state.cartItems,
  );

  return {cartItems, idToCartItems};
};

export default useCartItems;
