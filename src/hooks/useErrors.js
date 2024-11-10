import {useSelector} from 'react-redux';

/**
 * Custom hook to access error state from the Redux store.
 *
 * @returns {Object} Error state:
 * @property {boolean} isError - Indicates if an error is present.
 * @property {string} errorTitle - Title or summary of the error.
 * @property {string} errorMessage - Detailed error message.
 * @property {string} errorType - Type or category of the error.
 */
const useErrors = () => {
  const {
    isError = false,
    errorTitle = '',
    errorMessage = '',
    errorType = '',
  } = useSelector(state => state.errors);

  return {isError, errorTitle, errorMessage, errorType};
};

export default useErrors;
