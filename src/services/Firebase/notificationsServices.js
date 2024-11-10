import messaging from '@react-native-firebase/messaging';

/**
 * Request notification permission from the user (iOS only).
 * This function checks and requests permission for notifications.
 * @returns {boolean} - Returns `true` if permission is granted or provisional, otherwise `false`.
 */
export const requestNotificationPermission = async () => {
  const authStatus = await messaging().requestPermission(); // Requests notification permission from the user
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED || // Authorized for notifications
    authStatus === messaging.AuthorizationStatus.PROVISIONAL // Provisional permission granted
  );
};

/**
 * Background message handler.
 * This function is called when a notification is received while the app is in the background.
 */
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage.notification); // Logs notification data
});

/**
 * Setup foreground notification listener.
 * This listener is triggered when a notification is received while the app is in the foreground.
 * @returns {function} - Returns a function to unsubscribe from the listener.
 */
export const setupForegroundNotificationListener = () => {
  return messaging().onMessage(async remoteMessage => {
    const {notification} = remoteMessage; // Destructure notification data from the message
    console.log('Message received in the foreground!', {notification}); // Logs notification received in foreground
  });
};

/**
 * Initialize notifications by requesting permission, setting up listeners, and getting device token.
 */
export const initializeNotifications = async () => {
  await requestUserPermission(); // Request user permission for notifications
  await setupNotificationListener(); // Setup notification listeners for app background and foreground
  await getDeviceToken(); // Retrieve the device token for push notifications
};

/**
 * Get the device token for remote messaging.
 * This function registers the device for remote messages and retrieves the device token.
 * @returns {string} - The device token for push notifications.
 * @throws Will throw an error if the token cannot be retrieved.
 */
export async function getDeviceToken() {
  try {
    await messaging().registerDeviceForRemoteMessages(); // Register the device for remote messages
    return await messaging().getToken(); // Retrieve the device token
  } catch (error) {
    console.error('Error getting Firebase token:', error); // Logs error if token retrieval fails
    throw error; // Throws error if token cannot be retrieved
  }
}

/**
 * Request user permission for notifications.
 * Checks and logs the user's authorization status for notifications.
 */
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission(); // Request permission
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED || // Check if authorized
    authStatus === messaging.AuthorizationStatus.PROVISIONAL; // Check if provisional permission granted

  if (enabled) {
    console.log('Authorization status:', authStatus); // Log authorization status if permission granted
  }
}

/**
 * Setup notification listeners for when the app is in the background or quit state.
 * These listeners handle actions such as opening the app from a notification and processing the data payload.
 */
export async function setupNotificationListener() {
  // When the app is in the background and the user taps on a notification
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification, // Logs notification data when app is opened from background
    );
  });

  // When the app is completely closed (quit state) and the user opens it via a notification
  await messaging()
    .getInitialNotification() // Get the initial notification that opened the app
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification, // Logs notification data if app opened from quit state
        );
      }
    });
}
