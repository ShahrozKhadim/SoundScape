import {TYPES} from '../TYPES';
import {store} from '../store';
import {clearProductsAndHistory} from './index';
import {clearCartItems} from './cartItemsActions';
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../../services/Firebase/authService';
import {writeUserData} from '../../services/Firebase/databaseServices';
import {
  loginWithGoogle,
  performGoogleLogout,
} from '../../services/googleSignInService';
import {
  loginWithFacebook,
  performFacebookLogout,
} from '../../services/facebook';

const {LOGIN_SUCCESS, SET_LOADING, LOGIN_FAILURE, LOGOUT} = TYPES;

/**
 * Login with email and password
 *
 * @param {string} email
 * @param {string} password
 * @returns {function} dispatch action
 */
export const loginWithEmailAction = (email, password) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const token = await loginWithEmailAndPassword(email, password);
    const body = {user: null, token, loginType: 'Email'};
    dispatch(loginSuccess(body));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

/**
 * Register a new user with email and password
 *
 * @param {string} email
 * @param {string} password
 * @returns {function} dispatch action
 */
export const registerWithEmailAction = (email, password) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const {user, token} = await registerWithEmailAndPassword(email, password);
    const body = {user, token, loginType: 'Email'};
    dispatch(loginSuccess(body));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

/**
 * Login with Google credentials
 *
 * @returns {function} dispatch action
 */
export const performGoogleLogin = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    const user = await loginWithGoogle();
    const {id, email, name, photo} = user;

    await writeUserData(id, email, name, photo);

    const body = {token: id, user, loginType: 'Google'};
    dispatch(loginSuccess(body));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

/**
 * Login with Facebook credentials
 *
 * @returns {function} dispatch action
 */
export const performFacebookLogin = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    const user = await loginWithFacebook();
    const {email, id, name} = user;

    await writeUserData(id, email, name); // Await if writeUserData is async

    const body = {token: id, user, loginType: 'Facebook'};
    dispatch(loginSuccess(body));
  } catch (error) {
    dispatch(loginFailure(error.message));
  } finally {
    dispatch(setLoading());
  }
};

/**
 * Dispatches the login success action
 *
 * @param {Object} payload - Contains user info and token
 * @returns {Object} action
 */
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

/**
 * Dispatches the login failure action
 *
 * @param {string} error - Error message
 * @returns {Object} action
 */
export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

/**
 * Logout action to clear user session
 *
 * @returns {function} dispatch action
 */
export const logout = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    const {loginType} = store.getState().auth;
    const socials = {
      Google: performGoogleLogout,
      Facebook: performFacebookLogout,
      Email: () => {
        return Promise.resolve();
      },
    };

    const activeSocial = socials[loginType];

    dispatch(clearProductsAndHistory());
    dispatch(clearCartItems());

    if (activeSocial) {
      await activeSocial();
    }

    dispatch(performLogout());
  } catch (err) {
    console.error('Logout error: ', err);
    throw err;
  } finally {
    dispatch(setLoading());
  }
};

/**
 * Dispatches the logout action
 *
 * @returns {Object} action
 */
export const performLogout = () => ({type: LOGOUT});

/**
 * Dispatches the loading state action
 *
 * @param {boolean} isLoading - Whether the app is in a loading state
 * @returns {Object} action
 */
export const setLoading = (isLoading = false) => ({
  type: SET_LOADING,
  payload: isLoading,
});
