import React, {useRef} from 'react';
import {Keyboard} from 'react-native';
import {Formik} from 'formik';

import {VerifyResetCodeScreen} from '../../Screens';
import {EMAIL_LOGIN_SCHEMA} from '../../Utils';
import {ROUTES} from '../../Navigation/Routes';

const {RESET_PASSWORD} = ROUTES;

const VerifyResetCodeContainer = ({navigation}) => {
  const {navigate} = navigation;
  const emailRef = useRef(null);

  const handleEmailFocus = () => emailRef.current.focus();

  return (
    <Formik
      initialValues={{email: ''}}
      validationSchema={EMAIL_LOGIN_SCHEMA}
      onSubmit={(values, {setSubmitting}) => {
        Keyboard.dismiss();
        setSubmitting(true);
        navigate(RESET_PASSWORD);
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
        <VerifyResetCodeScreen
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
          emailRef={emailRef}
          handleEmailFocus={handleEmailFocus}
        />
      )}
    </Formik>
  );
};
export default VerifyResetCodeContainer;
