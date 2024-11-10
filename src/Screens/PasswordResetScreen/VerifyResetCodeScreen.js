import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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

const VerifyResetCodeScreen = ({
  values,
  handleBlur,
  handleChange,
  handleSubmit,
  errors,
  touched,
  isSubmitting,
  emailRef,
  handleEmailFocus,
}) => (
  <BackGroundView>
    <View style={{...logInText, flex: 3}}>
      <Text style={{...LargeTextStyle, ...titleText, fontSize: 30}}>
        Verify Your Identity
      </Text>
      <Text style={{...LargeTextStyle, ...text, ...styles.headerSubHeading}}>
        Enter the Verification Code
      </Text>
    </View>
    <View style={{...loginInputContainer, justifyContent: 'space-evenly'}}>
      <View style={styles.inputAndButtonContainer}>
        <CustomEmailInput
          email={'email'}
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          emailRef={emailRef}
          handleEmailFocus={handleEmailFocus}
        />
        <ErrorMessage
          error={errors.email}
          visible={touched.email}
          style={errorText}
        />
        <PrimaryButton
          text={'Verify'}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </View>
      <View
        style={{
          ...signUpTextContainer,
          ...styles.sendVerificationCodeTextContainer,
        }}>
        <Text style={{...LargeTextStyle, ...text, textAlign: 'center'}}>
          Please check your email for the verification code. Enter the code
          above to continue. If you haven't received the code, click "Resend
          Code."
        </Text>
      </View>
      <View />
    </View>
  </BackGroundView>
);
const styles = StyleSheet.create({
  sendVerificationCodeTextContainer: {
    height: '50%',
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  headerSubHeading: {
    width: '65%',
    textAlign: 'center',
  },
  inputAndButtonContainer: {
    height: '40%',
    justifyContent: 'space-evenly',
  },
});
export default VerifyResetCodeScreen;
