import React from 'react';
import {View, Text} from 'react-native';

import {
  BackGroundView,
  CustomEmailInput,
  PrimaryButton,
} from '../../Components';
import {authStyles, LargeTextStyle} from '../../Assets/Styles';
import ErrorMessage from '../../Components/ErrorMessage';

const {
  logInText,
  titleText,
  text,
  loginInputContainer,
  errorText,
  signUpTextContainer,
} = authStyles;

const ResetPasswordScreen = ({
  navigation,
  values,
  handleBlur,
  handleChange,
  handleSubmit,
  errors,
  touched,
  isSubmitting,
  emailRef,
  passwordRef,
  handleEmailFocus,
  handlePasswordFocus,
  onForgetPasswordPress,
}) => (
  <BackGroundView>
    <View style={logInText}>
      <Text style={{...LargeTextStyle, ...titleText, fontSize: 25}}>
        Reset Your Password
      </Text>
      <Text style={{...LargeTextStyle, ...text}}>Create a New Password</Text>
    </View>
    <View style={loginInputContainer}>
      <View style={{flex: 0.3}} />
      <CustomEmailInput
        email={'password'}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        passwordRef={passwordRef}
        handlePasswordFocus={handlePasswordFocus}
        passwordPlaceHolder={'Enter your new password'}
      />
      <ErrorMessage
        error={errors.password}
        visible={touched.password}
        style={errorText}
      />
      <CustomEmailInput
        email={'password'}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        passwordRef={passwordRef}
        handlePasswordFocus={handlePasswordFocus}
        passwordPlaceHolder={'Confirm your new password'}
      />
      <ErrorMessage
        error={errors.password}
        visible={touched.password}
        style={errorText}
      />
      <PrimaryButton
        text={'Reset Password'}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      <View style={{...signUpTextContainer, width: '90%'}}>
        <Text style={{...LargeTextStyle, ...text, textAlign: 'center'}}>
          Create a strong password with a mix of letters, numbers, and symbols.
          Your password must be at least 8 characters long.
        </Text>
      </View>
      <View />
    </View>
  </BackGroundView>
);
export default ResetPasswordScreen;
