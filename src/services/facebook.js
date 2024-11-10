import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {PERMISSIONS} from '../Constants';

/**
 * Log out the user from Facebook.
 * This function calls the `LoginManager.logOut()` method to perform the Facebook logout.
 * @returns {Promise<void>} - A promise that resolves when the logout operation is complete.
 */
export const performFacebookLogout = async () => {
  LoginManager.logOut();
};

/**
 * Log in the user with Facebook and retrieve user data.
 * This function initiates the Facebook login flow, requests the specified permissions,
 * and fetches user information via the Facebook Graph API once login is successful.
 * @returns {Promise<object>} - A promise that resolves to the user data (ID, name, email).
 * @throws {string} - Throws the cancellation status if the login is cancelled.
 */
export const loginWithFacebook = async () => {
  // Perform the login request with the specified permissions
  const result = await LoginManager.logInWithPermissions(PERMISSIONS);

  if (result.isCancelled) {
    throw result.isCancelled;
  } else {
    // If login is successful, fetch the access token
    const data = await AccessToken.getCurrentAccessToken();
    if (data) {
      const {accessToken} = data;
      // Fetch user data from Facebook Graph API
      const response = await fetch(
        'https://graph.facebook.com/me?fields=id,name,email',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      // Return the user data
      return await response.json();
    }
  }
};
