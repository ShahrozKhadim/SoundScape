import React, {useRef, useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';

import {ResetPasswordScreen} from '../../Screens';
import {LOGIN_SCHEMA} from '../../Utils';
import {ROUTES} from '../../Navigation/Routes';
import {checkEmailInFirebaseAuth} from '../../services/Firebase/authService';
import {loginWithEmailAction} from '../../Store/Actions';

const {ENTER_EMAIL_ADDRESS} = ROUTES;

const ResetPasswordContainer = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleEmailFocus = () => emailRef.current.focus();

  const handlePasswordFocus = () => passwordRef.current.focus();

  /**
   * Handles user login with email and password.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @returns {Promise<void>} Resolves when the login process completes.
   *
   */
  const handleEmailLogin = (email, password) => {
    dispatch(loginWithEmailAction(email, password))
      .then(() => {
        console.log('Login successful');
      })
      .catch(error => {
        Alert.alert('Login failed', error.message);
      });
  };

  const onForgetPasswordPress = () => {
    navigate(ENTER_EMAIL_ADDRESS, {email});
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={async (values, {setSubmitting}) => {
        const {email, password} = values;
        await handleEmailLogin(email, password);
        await checkEmailInFirebaseAuth(email);
        Keyboard.dismiss();
        setSubmitting(true);
        setEmail(email);
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
        <ResetPasswordScreen
          navigation={navigation}
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
          emailRef={emailRef}
          passwordRef={passwordRef}
          handleEmailFocus={handleEmailFocus}
          handlePasswordFocus={handlePasswordFocus}
          onForgetPasswordPress={onForgetPasswordPress}
        />
      )}
    </Formik>
  );
};

export default ResetPasswordContainer;
