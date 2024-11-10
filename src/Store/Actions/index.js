import {
  logout,
  loginWithEmailAction,
  performGoogleLogin,
  performFacebookLogin,
  setLoading,
  registerWithEmailAction,
} from './authActions';
import {
  fetchProducts,
  removeHistory,
  searchHistory,
  clearProductsAndHistory,
} from './fetchProductsActions';
import {setError, clearError} from './errorsActions';
import {
  setShippingDetails,
  setPaymentMethod,
  clearCheckOut,
} from './checkOutActions';

export {
  logout,
  fetchProducts,
  searchHistory,
  clearProductsAndHistory,
  removeHistory,
  setError,
  clearError,
  setShippingDetails,
  setPaymentMethod,
  clearCheckOut,
  loginWithEmailAction,
  performGoogleLogin,
  performFacebookLogin,
  setLoading,
  registerWithEmailAction,
};
