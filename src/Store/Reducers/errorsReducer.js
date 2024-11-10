import {TYPES} from '../TYPES';

const {SET_ERROR, CLEAR_ERROR} = TYPES;
const initialState = {
  isError: false,
  errorTitle: '',
  errorMessage: '',
  errorType: '',
};

/**
 * Reducer for managing error state, handling actions to set and clear errors.
 *
 * @param {Object} state - Current state of error information.
 * @param {Object} action - Action dispatched to modify the error state.
 * @returns {Object} - New state after applying the action.
 */
const errorsReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_ERROR:
      return {
        isError: true,
        errorTitle: payload.errorTitle,
        errorMessage: payload.errorMessage,
        errorType: payload.errorType,
      };
    case CLEAR_ERROR:
      return {
        isError: false,
        errorTitle: '',
        errorMessage: '',
        errorType: '',
      };
    default:
      return state;
  }
};

export default errorsReducer;
