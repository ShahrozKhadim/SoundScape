import React, {useEffect, useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {EnterEmailAddressScreen} from '../../Screens';
import {EMAIL_LOGIN_SCHEMA} from '../../Utils';
import {ROUTES} from '../../Navigation/Routes';
import {
  checkEmailInFirebaseAuth,
  sendPasswordResetEmail,
} from '../../services/Firebase/authService';
import {setLoading} from '../../Store/Actions';
import {useAuth} from '../../hooks';

const {LOGIN} = ROUTES;

const EnterEmailAddressContainer = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {isLoading} = useAuth();
  const emailRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  let title = 'Password Reset Email Sent';
  let message = `A verification code has been sent to your email address.
   Please check your inbox and follow the instructions to reset your password.`;

  useEffect(() => {
    return () => {
      dispatch(setLoading());
    };
  }, []);

  const handleEmailFocus = () => emailRef.current.focus();

  /**
   * Validates if the provided email is registered and handles password reset if necessary.
   *
   * @param {string} email - The user's email address to validate.
   * @returns {Promise<void>} Resolves when the email validation and any necessary actions are completed.
   *
   */
  const checkEmailValidation = async email => {
    await checkEmailInFirebaseAuth(email)
      .then(async signInMethods => {
        if (signInMethods.length === 0) {
          console.log('Email is not registered.');
        } else {
          await sendPasswordResetEmail(email);
        }
      })
      .catch(error => {
        dispatch(setLoading());
        console.error('Error checking email:', error);
      });
  };

  const onKnowYourPasswordPress = () => {
    navigate(LOGIN);
  };

  const handleStopTimer = () => dispatch(setLoading());

  const handleIsVisible = () => setIsVisible(false);

  return (
    <Formik
      initialValues={{email: ''}}
      validationSchema={EMAIL_LOGIN_SCHEMA}
      onSubmit={async values => {
        await checkEmailValidation(values.email);
        Keyboard.dismiss();
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <EnterEmailAddressScreen
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
          emailRef={emailRef}
          handleEmailFocus={handleEmailFocus}
          onKnowYourPasswordPress={onKnowYourPasswordPress}
          isLoading={isLoading}
          handleStopTimer={handleStopTimer}
          isVisible={isVisible}
          handleIsVisible={handleIsVisible}
          title={title}
          message={message}
        />
      )}
    </Formik>
  );
};

export default EnterEmailAddressContainer;
