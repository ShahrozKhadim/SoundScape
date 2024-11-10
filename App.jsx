import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';

import {TYPES} from './src/Store/TYPES';
import Navigation from './src/Navigation';
import {
  fetchProductsFromFirebase,
  subscribeToUserActivities,
} from './src/services/Firebase/databaseServices';
import {initializeGoogleSignIn} from './src/services/googleSignInService';
import {initializeNotifications} from './src/services/Firebase/notificationsServices';
import messaging from '@react-native-firebase/messaging';
import {useAuth} from './src/hooks';

AndroidKeyboardAdjust.setAdjustPan();
const {STOP_LOADING} = TYPES;

/**
 * Root application component.
 * Handles initialization of services, user activity subscriptions, and navigation.
 *
 * @returns {React.JSX.Element} Main App component with navigation.
 */
const App = () => {
  const dispatch = useDispatch();
  const {token} = useAuth();

  // Initialize core services when the app starts
  useEffect(() => {
    // Hide the splash screen once app has loaded
    SplashScreen.hide();

    // Initialize Google Sign-In
    initializeGoogleSignIn();

    // Initialize notifications and setup listener for foreground messages
    const unsubscribe = messaging().onMessage(async remoteMessage =>
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage)),
    );
    dispatch({type: STOP_LOADING});
    initializeNotifications().then();

    // Cleanup the messaging subscription on component unmount
    return unsubscribe;
  }, [dispatch]);

  // Subscribe to user activities and fetch products if authenticated
  useEffect(() => {
    if (!token) {
      return undefined;
    }
    // Subscribe to user activities changes in Firebase
    const unsubscribeUserActivities = subscribeToUserActivities(
      token,
      dispatch,
    );

    // Fetch products from Firebase
    fetchProductsFromFirebase(dispatch).then();

    // Cleanup the user activities subscription on component unmount
    // return unsubscribeUserActivities;
  }, [token, dispatch]);

  return <Navigation />;
};
export default App;
