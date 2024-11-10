import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {firebaseConfiguration} from '../../Constants';

/**
 * Initialize Firebase with the provided configuration.
 * This initializes the Firebase app and connects it to the Firebase services.
 */
const firebaseApp = initializeApp(firebaseConfiguration);

/**
 * Initialize and export the Firebase Realtime Database instance.
 * The Realtime Database is used to store and sync data in real-time.
 */
export const database = getDatabase(firebaseApp);

// Export the initialized Firebase app if needed elsewhere in the project
export default firebaseApp;
