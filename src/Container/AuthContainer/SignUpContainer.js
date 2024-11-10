import React, {useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {SignUpScreen} from '../../Screens';
import {SIGNUP_LOGIN_SCHEMA} from '../../Utils';
import {ROUTES} from '../../Navigation/Routes';
import {
  performFacebookLogin,
  performGoogleLogin,
  registerWithEmailAction,
} from '../../Store/Actions';
import {Google_Error_Messages} from '../../Constants';

const {HOME} = ROUTES;
const isVisibleInitialState = {isInfo: false, isWarning: false};
const formikInitialValues = {email: '', password: ''};

const SignUpContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack, navigate} = navigation;
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(isVisibleInitialState);
  const [modalText, setModalText] = useState({
    title: '',
    message: '',
  });

  const handleOnSubmitEditing = () => passwordRef?.current?.focus();

  /**
   * Handles user sign-in via Google authentication.
   *
   * @returns {Promise<void>} Resolves when the Google login process completes.
   *
   * @throws {Error} If an error occurs during the login process, it is caught and handled
   * according to the error code.
   */
  const handleGoogleSignIn = async () => {
    try {
      dispatch(performGoogleLogin()).then(() => navigate(HOME));
    } catch (error) {
      /*Have to refactor error codes*/
      const {code} = error;

      if (Google_Error_Messages[code]) {
        const {title, message, visibility} = Google_Error_Messages[code];
        handleModalText(title, message);
        handleSetIsVisible(visibility);
      } else {
        console.error(error);
      }
    }
  };

  function handleSetIsVisible(key = 'isWarning', boolean = true) {
    setIsVisible(prevState => ({...prevState, [key]: boolean}));
  }

  function handleModalText(title = '', message = '') {
    setModalText({title, message});
  }

  /**
   * Handles user sign-in via Facebook authentication.
   *
   * Dispatches the Facebook login action and navigates to the home screen on success.
   * In case of failure, it displays a modal with a generic error message.
   *
   * @returns {Promise<void>} Resolves when the Facebook login process completes.
   */
  const onFacebookLogin = async () => {
    try {
      dispatch(performFacebookLogin()).then(() => navigate(HOME));
    } catch (error) {
      handleModalText('Login failed', 'Error during Facebook login');
      handleSetIsVisible('isWarning');
    }
  };

  /**
   * Handles user signup with email and password.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @returns {Promise<void>} Resolves when the signup process completes.
   *
   */
  const handleEmailSignup = async (email, password) => {
    try {
      dispatch(registerWithEmailAction(email, password));
      navigate(HOME);
    } catch (error) {
      let message = error.message.split(' ').splice(1).join(' ');
      handleModalText('Signup failed', message);
      handleSetIsVisible('isWarning');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOkPress = () => {
    setIsVisible(isVisibleInitialState);
    handleModalText();
  };

  const handleGoBackPress = () => goBack();

  return (
    <Formik
      initialValues={formikInitialValues}
      validationSchema={SIGNUP_LOGIN_SCHEMA}
      onSubmit={async (values, {setSubmitting}) => {
        const {email, password} = values;
        setIsLoading(true);
        await handleEmailSignup(email, password);
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
      }) => (
        <SignUpScreen
          navigation={navigation}
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
          handleGoogleLogin={handleGoogleSignIn}
          onFacebookButtonPress={onFacebookLogin}
          emailRef={emailRef}
          passwordRef={passwordRef}
          handleOnSubmitEditing={handleOnSubmitEditing}
          isLoading={isLoading}
          modalText={modalText}
          isVisible={isVisible}
          handleOkPress={handleOkPress}
        />
      )}
    </Formik>
  );
};

export default SignUpContainer;
