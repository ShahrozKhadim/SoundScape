import {TYPES} from '../TYPES';

const {SET_ERROR, CLEAR_ERROR} = TYPES;

/**
 * Sets an error in the Redux state.
 *
 * @param {string} errorTitle - The title of the error
 * @param {string} errorMessage - The message of the error
 * @param {string} errorType - The type/category of the error
 * @returns {Function} dispatches SET_ERROR action with payload
 */
export const setError = (errorTitle, errorMessage, errorType) => {
  return dispatch => {
    const body = {
      errorTitle,
      errorMessage,
      errorType,
    };
    dispatch({type: SET_ERROR, payload: body});
  };
};

/**
 * Clears any errors in the Redux state.
 *
 * @returns {Object} dispatches CLEAR_ERROR action
 */
export const clearError = () => ({type: CLEAR_ERROR});
