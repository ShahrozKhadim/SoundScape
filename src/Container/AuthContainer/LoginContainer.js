import React, {useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {ROUTES} from '../../Navigation/Routes';
import {LoginScreen} from '../../Screens';
import {LOGIN_SCHEMA} from '../../Utils';
import {loginWithEmailAction, setLoading} from '../../Store/Actions';
import {useAuth} from '../../hooks';

const {ENTER_EMAIL_ADDRESS, SIGNUP, HOME} = ROUTES;

const LoginContainer = ({navigation}) => {
  const {navigate} = navigation;
  const emailRef = useRef();
  const passwordRef = useRef();
  const formikRef = useRef();
  const dispatch = useDispatch();
  const {isLoading} = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [modalText, setModalText] = useState({
    title: '',
    message: '',
  });
  const initialValues = {email: '', password: ''};

  /**
   * Handles user login with email and password.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @returns {Promise<void>} Resolves when the login process completes.
   */
  const handleEmailLogin = async (email, password) => {
    try {
      dispatch(loginWithEmailAction(email, password));
      navigate(HOME);
    } catch (error) {
      let message = error.message.split(' ').splice(1).join(' ');
      setModalText({
        title: 'Login Failed',
        message: message,
      });
      setIsVisible(true);
      dispatch(setLoading());
    }
  };

  const onForgetPasswordPress = () => navigate(ENTER_EMAIL_ADDRESS);

  const clearInputAndNavigateToForgotPassword = resetForm => {
    resetForm(initialValues);
    onForgetPasswordPress();
  };

  const clearInputAndNavigateToSignUp = resetForm => {
    resetForm(initialValues);
    navigate(SIGNUP);
  };

  const handleOnSubmitEditing = () => passwordRef?.current?.focus();

  const handleIsVisible = () => setIsVisible(false);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={async (values, {setSubmitting}) => {
        dispatch(setLoading(true));
        await handleEmailLogin(values.email, values.password);
        Keyboard.dismiss();
        setSubmitting(true);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => (
        <LoginScreen
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
          emailRef={emailRef}
          passwordRef={passwordRef}
          handleOnSubmitEditing={handleOnSubmitEditing}
          isLoading={isLoading}
          isVisible={isVisible}
          handleIsVisible={handleIsVisible}
          modalText={modalText}
          resetForm={resetForm}
          clearInputAndNavigateToForgotPassword={
            clearInputAndNavigateToForgotPassword
          }
          clearInputAndNavigateToSignUp={clearInputAndNavigateToSignUp}
        />
      )}
    </Formik>
  );
};

export default LoginContainer;
