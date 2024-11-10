/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';
import {name as appName} from './app.json';
import {persistor, store} from './src/Store/store';
import {initializeRealtimeDatabaseListeners} from './src/services/Firebase/databaseServices';
import {handleDynamicLinks} from './src/services/Firebase/dynamicLinksService';
import {
  requestNotificationPermission,
  setupForegroundNotificationListener,
} from './src/services/Firebase/notificationsServices';

/**
 * Initialize Firebase-related listeners and permissions.
 */
initializeRealtimeDatabaseListeners();
// Request notification permission and set up foreground notification listener if granted
requestNotificationPermission().then(enabled => {
  if (enabled) {
    setupForegroundNotificationListener();
  }
});

// Handle incoming dynamic links
handleDynamicLinks();

/**
 * Root component wrapped in Redux provider and Redux Persist gate
 *
 * @returns {React.JSX.Element} The root component of the application.
 */
const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

// Register the main application component with the app registry
AppRegistry.registerComponent(appName, () => Root);
