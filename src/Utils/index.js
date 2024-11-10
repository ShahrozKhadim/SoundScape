import * as yup from 'yup';
import {Animated, PanResponder} from 'react-native';
import * as Yup from 'yup';
import {REQUIRED_FIELD_MESSAGE} from '../Constants';
import {nanoid} from '@reduxjs/toolkit';

// Validation starts here
export const EMAIL_LOGIN_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email')
    .required(REQUIRED_FIELD_MESSAGE),
});

export const SIGNUP_LOGIN_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email')
    .required(REQUIRED_FIELD_MESSAGE),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required(REQUIRED_FIELD_MESSAGE),
});

export const LOGIN_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email')
    .required(REQUIRED_FIELD_MESSAGE),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required(REQUIRED_FIELD_MESSAGE),
});

export const CHECKOUT_FORM_SCHEMA = yup.object().shape({
  fullName: yup
    .string()
    .min(2, 'Full Name must be at least 2 characters')
    .required(REQUIRED_FIELD_MESSAGE),
  phoneNumber: yup
    .string()
    // .matches([0 - 9], 'Phone number is not valid')
    .required(REQUIRED_FIELD_MESSAGE),
  province: yup.string().required(REQUIRED_FIELD_MESSAGE),
  city: yup.string().required(REQUIRED_FIELD_MESSAGE),
  streetAddress: yup.string().required(REQUIRED_FIELD_MESSAGE),
  postalCode: yup
    .string()
    .matches(/^[A-Za-z0-9\s-]+$/, 'Postal code is not valid')
    .required(REQUIRED_FIELD_MESSAGE),
});

export const CARD_VALIDATION_SCHEMA = Yup.object().shape({
  cardHolderName: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  cardNumber: Yup.string()
    .required(REQUIRED_FIELD_MESSAGE)
    .matches(/^[0-9]/, 'Invalid card number'),
  expiryDate: Yup.string()
    .required(REQUIRED_FIELD_MESSAGE)
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date'),
  cvv: Yup.string()
    .required(REQUIRED_FIELD_MESSAGE)
    .matches(/^[0-9]/, 'Invalid CVV'),
  paymentMethod: Yup.string().required('Please select a payment method.'),
});

/**
 *
 * @param startTimeStr
 * @param endTimeStr
 * @returns {number|string}
 */
export function getRandomTimeInSecondsBetween(startTimeStr, endTimeStr) {
  const startTime = new Date(startTimeStr).getTime();
  const endTime = new Date(endTimeStr).getTime();

  if (isNaN(startTime) || isNaN(endTime)) {
    return 'Invalid date format';
  }

  const randomTimestamp = startTime + Math.random() * (endTime - startTime);
  return Math.floor(randomTimestamp / 1000);
}

export function base64File(url) {
  return fetch(url)
    .then(data => data.blob())
    .then(blob => {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
    });
}

export const handleClearInput = inputRef => inputRef?.current?.clear();

/**
 * Handles the animation for scaling the cart item length. It animates the scale of the item
 * with a sequence of spring animations, where the item grows and then shrinks back to the original size.
 * The physics of the spring (friction and tension) can be customized.
 *
 * @param {Animated.Value} animationRef - The Animated reference to be animated (scale value of the item).
 * @param {number} [toValue1=1.5] - The target scale value for the first spring animation (default is 1.5).
 * @param {number} [toValue2=1.3] - The target scale value for the second spring animation (default is 1.3).
 * @param {number} [friction=1] - The friction value that determines the damping effect of the spring (default is 1).
 * @param {number} [tension=360] - The tension value that controls the stiffness of the spring (default is 360).
 */
export const handleCartItemLengthAnimation = (
  animationRef,
  toValue1 = 1.5,
  toValue2 = 1.3,
  friction = 1,
  tension = 360,
) => {
  Animated.sequence([
    Animated.spring(animationRef, {
      toValue: toValue1,
      friction,
      tension,
      useNativeDriver: true,
    }),
    Animated.spring(animationRef, {
      toValue: toValue2,
      friction,
      tension,
      useNativeDriver: true,
    }),
  ]).start();
};

// Animation logic starts here
/*
export const handleCartItemLengthAnimation = animationRef => {
  Animated.spring(animationRef, {
    toValue: 1.5,
    duration: 1000,
    friction: 1,
    tension: 360,
    useNativeDriver: true,
  }).start(() =>
    Animated.timing(animationRef, {
      toValue: 1.3,
      duration: 1000,
      useNativeDriver: true,
    }).start(),
  );
};
*/

export const panResponderAnimation = callback => {
  return PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      //After the change in the location
      const {pageX, pageY} = event.nativeEvent;
      callback(pageX, pageY);
    },
  });
};
// Animation logic ends here

/*
export const getProvinceLists = countriesList => {
  let listOfProvinces = [];
  countriesList.map(countryItem => {
    if (countryItem?.states.length) {
      countryItem?.states.map(statesItem => {
        listOfProvinces.push({
          state: `${statesItem?.name}, ${countryItem.name}`,
          id: nanoid(),
        });
      });
    }
  });
  return listOfProvinces;
};
*/

export const getProvinceLists = countriesList => {
  // Use flatMap to both map and flatten the result
  const listOfProvinces = countriesList.flatMap(countryItem => {
    return countryItem?.states?.length
      ? countryItem.states.map(statesItem => ({
          state: `${statesItem?.name}, ${countryItem.name}`,
          id: nanoid(),
        }))
      : [];
  });

  return listOfProvinces;
};

export const PAYMENT_OPTIONS = ['creditCard', 'paypal', 'googlePlay'];

/**
 *
 * @param nextRef
 * @constructor
 */
export const INPUT_FOCUS = nextRef => {
  if (nextRef?.current) {
    nextRef?.current?.focus();
  }
};
