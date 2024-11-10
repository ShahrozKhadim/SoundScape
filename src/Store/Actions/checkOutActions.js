import {TYPES} from '../TYPES';

const {SET_SHIPPING_DETAILS, SET_PAYMENT_METHOD, CLEAR_CHECK_OUT} = TYPES;

export const setShippingDetails = shippingDetails => ({
  type: SET_SHIPPING_DETAILS,
  payload: shippingDetails,
});
export const setPaymentMethod = paymentDetails => ({
  type: SET_PAYMENT_METHOD,
  payload: paymentDetails,
});
export const clearCheckOut = () => ({type: CLEAR_CHECK_OUT});
