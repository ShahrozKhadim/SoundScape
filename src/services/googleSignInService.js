import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleConfig} from '../Constants';
import auth from '@react-native-firebase/auth';

/**
 * Configures Google Sign-In with the required web client ID.
 * This function should be called once at the start of the app to initialize Google Sign-In.
 */
export const initializeGoogleSignIn = () => {
  const {webClientId} = GoogleConfig;
  GoogleSignin.configure({webClientId});
};

/**
 * Log in the user with Google Sign-In.
 * This function checks if Google Play Services are available, then proceeds with the login flow.
 * After successful login, the user's credentials are used to sign in to Firebase.
 *
 * @returns {Promise<Object>} - A promise that resolves with the Google user data (user info).
 * @throws {Error} - Throws an error if the login process fails.
 */
export const loginWithGoogle = async () => {
  try {
    const {hasPlayServices, signIn} = GoogleSignin;

    // Check if Google Play Services are available on the device
    await hasPlayServices();

    // Sign in with Google
    const userInfo = await signIn();

    // Create Firebase credential with the Google idToken
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );

    // Sign in to Firebase with the Google credentials
    await auth().signInWithCredential(googleCredential);

    // Return user information
    return userInfo.user;
  } catch (error) {
    throw error;
  }
};

/**
 * Log out the user from Google Sign-In.
 * This function logs out the user from both Google Sign-In and Firebase.
 *
 * @returns {Promise<void>} - A promise that resolves when the logout process is complete.
 */
export const performGoogleLogout = async () => {
  await GoogleSignin.signOut();
};
