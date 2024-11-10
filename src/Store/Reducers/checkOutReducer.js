import {TYPES} from '../TYPES';

const {SET_SHIPPING_DETAILS, SET_PAYMENT_METHOD, CLEAR_CHECK_OUT} = TYPES;
const initialState = {
  shippingDetails: {
    city: '',
    fullName: '',
    phoneNumber: '',
    postalCode: '',
    province: '',
    streetAddress: '',
    phoneNumberDetails: {
      formatted: '',
      numeric: '',
      international: '',
      localNumber: '',
      country: {
        callingCode: ['92'],
        cca2: 'PK',
        currency: ['PKR'],
        flag: 'flag-pk',
        name: 'Pakistan',
        region: 'Asia',
        subregion: 'Southern Asia',
      },
    },
  },
  paymentMethod: {
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'Credit Card',
  },
  formHasData: false,
};

/**
 * Reducer for managing checkout state, including shipping details and payment method.
 *
 * @param {Object} state - Current state of the checkout.
 * @param {Object} action - Action dispatched to modify checkout state.
 * @returns {Object} - New state after applying the action.
 */
const checkOutReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_SHIPPING_DETAILS:
      return {
        ...state,
        shippingDetails: payload,
        formHasData: true,
      };
    case SET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
        formHasData: true,
      };
    case CLEAR_CHECK_OUT:
      return initialState;
    default:
      return state;
  }
};
export default checkOutReducer;
