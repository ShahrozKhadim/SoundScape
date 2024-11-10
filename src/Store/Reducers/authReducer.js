import {TYPES} from '../TYPES';

const {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_LOADING,
  STOP_LOADING,
  LOADING,
} = TYPES;
const initialState = {
  token: null,
  user: null,
  loginType: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
};

/**
 * Reducer to handle authentication state, including login, logout,
 * loading states, and error handling.
 *
 * @param {Object} state - Current state of authentication.
 * @param {Object} action - Action dispatched to modify the auth state.
 * @returns {Object} - New state after applying the action.
 */
const authReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
        error: null,
        loginType: payload.loginType,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        token: null,
        user: null,
        isAuthenticated: false,
        error: payload,
        loginType: null,
        isLoading: false,
      };
    case LOGOUT:
      return {
        token: null,
        user: null,
        isAuthenticated: false,
        error: null,
        loginType: null,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
