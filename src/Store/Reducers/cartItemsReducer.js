import {TYPES} from '../TYPES';

const {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  REMOVE_ALL_CART_ITEMS,
  CLEAR_CART_ITEMS,
} = TYPES;
const initialState = {
  cartItems: [],
  idToCartItems: [],
};

/**
 * Reducer to manage cart items, including adding, removing, and updating quantities.
 *
 * @param {Object} state - Current state of the cart.
 * @param {Object} action - Action dispatched to modify the cart state.
 * @returns {Object} - New state after applying the action.
 */
const cartItemsReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_ITEM_TO_CART:
      return {
        cartItems: [...payload.cartItems],
        idToCartItems: [...payload.idToCartItems],
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        cartItems: payload.cartItems,
        idToCartItems: payload.idToCartItems,
      };
    case INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: payload,
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: payload,
      };
    case REMOVE_ALL_CART_ITEMS:
      return {
        cartItems: payload,
      };
    case CLEAR_CART_ITEMS:
      return {
        cartItems: [],
        idToCartItems: [],
      };
    default:
      return state;
  }
};

export default cartItemsReducer;
