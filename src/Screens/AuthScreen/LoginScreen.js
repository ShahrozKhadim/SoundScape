import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  AttentionModal,
  BackGroundView,
  CustomEmailInput,
  CustomPasswordInput,
} from '../../Components';
import PrimaryButton from '../../Components/PrimaryButton';
import {authStyles, colors, LargeTextStyle} from '../../Assets/Styles';
import ErrorMessage from '../../Components/ErrorMessage';

const {green} = colors;
const {
  logInText,
  titleText,
  text,
  loginInputContainer,
  errorText,
  signUpTextContainer,
} = authStyles;

const LoginScreen = ({
  values,
  handleBlur,
  handleChange,
  handleSubmit,
  errors,
  touched,
  isSubmitting,
  emailRef,
  passwordRef,
  handleOnSubmitEditing,
  isLoading,
  isVisible,
  handleIsVisible,
  modalText,
  resetForm,
  clearInputAndNavigateToForgotPassword,
  clearInputAndNavigateToSignUp,
}) => {
  return (
    <BackGroundView>
      <View style={logInText}>
        <AttentionModal
          title={modalText?.title}
          message={modalText?.message}
          isVisible={isVisible}
          handleOkPress={handleIsVisible}
        />
        <Text style={{...LargeTextStyle, ...titleText}}>Sound Scape</Text>
        <Text style={{...LargeTextStyle, ...text}}>Where Melodies Blossom</Text>
      </View>
      <View style={loginInputContainer}>
        <View style={{flex: 0.3}} />
        <CustomEmailInput
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          ref={emailRef}
          handleOnSubmitEditing={handleOnSubmitEditing}
          editable={!isLoading}
        />
        <ErrorMessage
          error={errors.email}
          visible={touched.email}
          style={errorText}
        />
        <CustomPasswordInput
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          onSubmitEditing={handleSubmit}
          ref={passwordRef}
          editable={!isLoading}
        />
        <ErrorMessage
          error={errors.password}
          visible={touched.password}
          style={errorText}
        />
        <Text
          style={{...LargeTextStyle, ...text, ...styles.signUpText}}
          onPress={() => clearInputAndNavigateToForgotPassword(resetForm)}>
          Forgot Password
        </Text>
        <PrimaryButton
          text={'Sign in'}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          // isSubmitting={isSubmitting}
        />
        <View style={signUpTextContainer}>
          <Text style={{...LargeTextStyle, ...text}}>
            Didn't have any account?{' '}
            <Text
              onPress={() => clearInputAndNavigateToSignUp(resetForm)}
              style={{...LargeTextStyle, ...text, ...styles.signUpText}}>
              Sign Up here
            </Text>
          </Text>
        </View>
        <View />
      </View>
    </BackGroundView>
  );
};
const styles = StyleSheet.create({
  signUpText: {
    textDecorationLine: 'underline',
    color: green,
  },
});
export default LoginScreen;
