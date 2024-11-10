import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_DATABASE_URL,
  GOOGLE_WEB_CLIENT_ID,
  FACEBOOK_APP_ID,
  FACEBOOK_LOGIN_PROTOCOL_SCHEME,
  FACEBOOK_CLIENT_TOKEN,
  FACEBOOK_SHA1,
  FACEBOOK_SHA_256,
  DEEPLINK,
  DEEPLINK_ONE,
  DYNAMIC_LINK,
  FALLBACK_URL,
} from '@env';
import {ROUTES} from '../Navigation/Routes';

const {HOME, LOGIN} = ROUTES;

/**
 * The package name of the app for Android.
 * It should match the package name specified in the AndroidManifest.xml.
 * @type {string}
 */
export const packageName = 'com.soundscape';

/**
 * The name of the app displayed on the app stores and within the app itself.
 * @type {string}
 */
export const appName = 'SoundScape';

/**
 * Firebase configuration for the app.
 * Replace the placeholders with actual values from the Firebase console.
 * These values are required for connecting the app to Firebase services.
 * @type {{storageBucket: *, apiKey: *, messagingSenderId: *, appId: *, projectId: *, measurementId: *, databaseURL: *, authDomain: *}}
 */
export const firebaseConfiguration = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
  databaseURL: FIREBASE_DATABASE_URL,
};

/**
 * Google Sign-In configuration for the app.
 * Replace the placeholder with your actual Google Web Client ID from the Google Developer Console.
 * @type {{webClientId: *}}
 */
export const GoogleConfig = {
  webClientId: GOOGLE_WEB_CLIENT_ID,
};

/**
 * Facebook SDK configuration.
 * These values should be replaced with those obtained from your Facebook Developer Console.
 * @type {{facebook_app_id: string, fb_login_protocol_scheme: string, facebook_client_token: string, SHA1: string, SHA_256: string}}
 */
// <---- Below Values are number, converted to string to resolve warning
export const facebook_app_id = FACEBOOK_APP_ID;
export const fb_login_protocol_scheme = FACEBOOK_LOGIN_PROTOCOL_SCHEME;
export const facebook_client_token = FACEBOOK_CLIENT_TOKEN;
export const SHA1 = FACEBOOK_SHA1;
export const SHA_256 = FACEBOOK_SHA_256;
// <---- Above Values are number, converted to string to resolve warning

/**
 * Deep link configurations for the app.
 * Deep links are URLs that link directly to specific content or pages inside the app.
 * These links can be used to open your app from external sources or browsers.
 * @type {{deepLink: string, deepLinkOne: string, deepLinkTwo: string, dynamicLink: string, fallbackUrl: string}}
 */
export const deepLink = DEEPLINK;
export const deepLinkOne = DEEPLINK_ONE;
export const deepLinkTwo = 'www.soundscape.com';
export const dynamicLink = DYNAMIC_LINK;
export const fallbackUrl = FALLBACK_URL;

// <---- Below Values are number, converted to string to resolve warning
/**
 * These values represent the Facebook-related configurations.
 * They might be numeric but are converted to strings to prevent warnings during the build process.
 * @type {string}
 */
export const REQUIRED_FIELD_MESSAGE = 'Field is required';
export const INITIAL_ROUTE = {
  true: HOME,
  false: LOGIN,
};
export const MIN_QUANTITY_REACHED_MESSAGE = {
  title: 'Minimum Quantity Reached',
  message: "Can't go below one. You can remove it if needed.",
};
export const MAX_STOCK_REACHED_MESSAGE = {
  title: 'Maximum Stock Reached',
  message:
    "Hey there! We've hit the maximum stock limit for this item. You can't add more to your cart at the moment. Feel free to review your cart or explore other great products!",
};
export const EMPTY_CART_CONFIRMATION_MESSAGE = {
  title: 'Empty Cart Confirmation',
  message: 'This action will clear your entire cart. Are you sure?',
  cancel: 'No, Keep Items',
  delete: 'Yes, Empty Cart',
};
export const DUPLICATION_ITEM_MESSAGE = {
  title: 'Duplicate Item',
  message: 'Already in cart.\n Check out or explore more!',
};
export const PERMISSIONS = ['public_profile', 'email'];

export const Platforms = {
  ANDROID: 'android',
  IOS: 'ios',
};
export const Google_Error_Messages = {
  SIGN_IN_CANCELLED: {
    title: 'Login failed',
    message: 'Sign-in cancelled',
    visibility: 'isWarning',
  },
  IN_PROGRESS: {
    title: 'Login',
    message: 'Sign-in is in progress',
    visibility: 'isInfo',
  },
  PLAY_SERVICES_NOT_AVAILABLE: {
    title: 'Login failed',
    message: 'Play services not available or outdated',
    visibility: 'isWarning',
  },
};
