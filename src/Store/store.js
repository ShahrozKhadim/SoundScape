import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import rootReducer from './Reducers';

/**
 * Redux Persist configuration for persisting the Redux store.
 * @type {Object}
 * @property {string} key - Key for the root persist state.
 * @property {Object} storage - Storage engine used (AsyncStorage for React Native).
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create a persisted reducer using the persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Redux store creation with thunk middleware for handling async actions.
 */
const store = createStore(persistedReducer, applyMiddleware(thunk));

/**
 * Persistor instance for managing store persistence.
 */
const persistor = persistStore(store);
export {store, persistor};
