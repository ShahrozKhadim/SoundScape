import {combineReducers} from 'redux';

import authReducer from './authReducer';
import productsReducer from './productsReducer';
import cartItemsReducer from './cartItemsReducer';
import errorsReducer from './errorsReducer';
import checkOutReducer from './checkOutReducer';

/**
 * Root reducer that combines all the individual reducers in the app.
 * This is the central point where all the state slices are combined.
 *
 * @returns {Object} - Combined state from all reducers.
 */
const rootReducer = combineReducers({
  auth: authReducer, // Auth-related state (user login status, token, etc.)
  products: productsReducer, // Product-related state (product data, search history, etc.)
  cartItems: cartItemsReducer, // Cart items state (items in the cart, quantities, etc.)
  errors: errorsReducer, // Error handling state (error messages, types, etc.)
  checkOut: checkOutReducer, // Checkout-related state (shipping details, payment info, etc.)
});

export default rootReducer;
