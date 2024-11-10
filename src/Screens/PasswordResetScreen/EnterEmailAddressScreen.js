import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {BackGroundView, CustomEmailInput} from '../../Components';
import {authStyles, colors, LargeTextStyle} from '../../Assets/Styles';
import SendVerificationCodeButton from '../../Components/SendVerificationCodeButton';
import SuccessModal from '../../Components/Modals/SuccessModal';
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

const EnterEmailAddressScreen = ({
  values,
  handleBlur,
  handleChange,
  handleSubmit,
  errors,
  touched,
  isSubmitting,
  emailRef,
  handleEmailFocus,
  onKnowYourPasswordPress,
  isLoading,
  handleStopTimer,
  isVisible,
  handleIsVisible,
  title,
  message,
}) => {
  return (
    <BackGroundView>
      <View style={{...logInText, flex: 3}}>
        <SuccessModal
          isVisible={isVisible}
          title={title}
          message={message}
          handleOkPress={handleIsVisible}
        />
        <Text style={{...LargeTextStyle, ...titleText, fontSize: hp('4%')}}>
          Reset Password
        </Text>
        <Text style={{...LargeTextStyle, ...text, ...styles.headerSubHeading}}>
          Forgot Your Password? No worries, we've got you covered.
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
            ref={emailRef}
            handleEmailFocus={handleEmailFocus}
            handleOnSubmitEditing={handleSubmit}
          />
          <ErrorMessage
            error={errors.email}
            visible={touched.email}
            style={errorText}
          />
          <SendVerificationCodeButton
            text={'Send Verification Code'}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            handleStopTimer={handleStopTimer}
            // isSubmitting={isSubmitting}
          />
          <Text style={{...LargeTextStyle, ...text, ...styles.instructionText}}>
            Enter the email linked to your account. We'll send a verification
            code. Check your inbox and spam folder.
          </Text>
        </View>
        <View
          style={{
            ...signUpTextContainer,
            ...styles.sendVerificationCodeTextContainer,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...LargeTextStyle, ...text}}>
              Know your password?{' '}
            </Text>
            <Text
              onPress={onKnowYourPasswordPress}
              style={{...LargeTextStyle, ...text, ...styles.logInHereText}}>
              Log In here
            </Text>
          </View>
        </View>
        <View />
      </View>
    </BackGroundView>
  );
};
const styles = StyleSheet.create({
  sendVerificationCodeTextContainer: {
    height: hp('20%'),
    flexDirection: 'column',
    width: wp('90%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  headerSubHeading: {
    width: wp('65%'),
    textAlign: 'center',
  },
  inputAndButtonContainer: {
    height: hp('26%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  instructionText: {
    fontSize: hp('1.6%'),
    paddingHorizontal: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  logInHereText: {
    textDecorationLine: 'underline',
    color: green,
  },
});
export default EnterEmailAddressScreen;
