import {useSelector} from 'react-redux';

/**
 * Custom hook to access checkout state from the Redux store.
 *
 * @returns {Object} Checkout state:
 * @property {Object} shippingDetails - Details related to shipping information.
 * @property {Object} paymentMethod - Selected payment method details.
 * @property {boolean} formHasData - Indicates if the checkout form has been filled.
 */
const useCheckOut = () => {
  const {
    shippingDetails = {},
    paymentMethod = {},
    formHasData = false,
  } = useSelector(state => state.checkOut);

  return {shippingDetails, paymentMethod, formHasData};
};

export default useCheckOut;
