import {useSelector} from 'react-redux';

/**
 * Custom hook to access the authentication state from the Redux store.
 *
 * This hook retrieves the authentication-related state properties such as
 * the user's authentication token, loading status, user details, login type,
 * authentication status, and any errors related to authentication.
 * It is intended to provide easy access to these properties for any component
 * that needs authentication context without directly interacting with the store.
 *
 * @returns {Object} Authentication state properties:
 * @property {boolean} isLoading - Indicates if an authentication request is in progress.
 * @property {string | null} loginType - Represents the type of login (e.g., "email", "social").
 * @property {boolean} isAuthenticated - True if the user is authenticated, otherwise false.
 * @property {string | null} error - Any error message related to authentication.
 * @property {Object | null} user - Information about the authenticated user.
 * @property {string | null} token - Authentication token if the user is logged in.
 */
const useAuth = () => {
  const {
    token = null,
    isLoading = false,
    user = null,
    loginType = null,
    isAuthenticated = false,
    error = null,
  } = useSelector(state => state.auth);

  return {token, isLoading, user, loginType, isAuthenticated, error};
};
export default useAuth;

/*
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Selector to get the auth state from Redux
const selectAuthState = state => state.auth;

// Memoized selector for token
const selectToken = createSelector([selectAuthState], auth => auth.token);

// Memoized selector for user
const selectUser = createSelector([selectAuthState], auth => auth.user);

// Memoized selector for isLoading
const selectIsLoading = createSelector([selectAuthState], auth => auth.isLoading);

// Memoized selector for loginType
const selectLoginType = createSelector([selectAuthState], auth => auth.loginType);

// Memoized selector for isAuthenticated
const selectIsAuthenticated = createSelector([selectAuthState], auth => auth.isAuthenticated);

// Memoized selector for error
const selectError = createSelector([selectAuthState], auth => auth.error);

const useAuth = () => {
  // Use the memoized selectors
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const loginType = useSelector(selectLoginType);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const error = useSelector(selectError);

  return { token, isLoading, user, loginType, isAuthenticated, error };
};

export default useAuth;

 */
