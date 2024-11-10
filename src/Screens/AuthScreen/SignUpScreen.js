import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  AttentionModal,
  BackGroundView,
  CustomEmailInput,
  CustomPasswordInput,
  LoginButton,
  SuccessModal,
} from '../../Components';
import PrimaryButton from '../../Components/PrimaryButton';
import {authStyles, colors, LargeTextStyle} from '../../Assets/Styles';
import {Facebook, Google} from '../../Assets/SVGIcons';
import ErrorMessage from '../../Components/ErrorMessage';

const {white, green} = colors;
const {
  logInText,
  titleText,
  text,
  loginInputContainer,
  errorText,
  signUpTextContainer,
} = authStyles;

const SignUpScreen = ({
  navigation,
  values,
  handleBlur,
  handleChange,
  handleSubmit,
  errors,
  touched,
  isSubmitting,
  handleGoogleLogin,
  onFacebookButtonPress,
  emailRef,
  passwordRef,
  handleOnSubmitEditing,
  isLoading,
  modalText,
  isVisible,
  handleOkPress,
  handleGoBackPress,
}) => (
  <BackGroundView>
    <View style={{...logInText, flex: 0.8}}>
      <AttentionModal
        title={modalText.title}
        message={modalText.message}
        isVisible={isVisible.isWarning}
        handleOkPress={handleOkPress}
      />
      <SuccessModal
        title={modalText.title}
        message={modalText.message}
        isVisible={isVisible.isInfo}
        handleOkPress={handleOkPress}
      />
      <Text style={{...LargeTextStyle, ...titleText}}>Sound Scape</Text>
      <Text style={{...LargeTextStyle, ...text}}>
        Join the Sound Revolution
      </Text>
    </View>
    <View style={{...loginInputContainer, flex: 1.3}}>
      <View style={{flex: 0.09}} />
      <CustomEmailInput
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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
      <PrimaryButton
        text={'Sign in'}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isLoading={isLoading}
      />
      <View style={styles.signUpOptionsContainer}>
        <LoginButton showOnAndroid={false} />
        <LoginButton
          onPress={onFacebookButtonPress}
          Icon={Facebook}
          iconHeight={hp('5%')}
          iconWidth={wp('5%')}
          iconColor={'#1777F2'}
        />
        <LoginButton
          onPress={handleGoogleLogin}
          Icon={Google}
          iconHeight={hp('7%')}
          iconWidth={wp('8%')}
          iconColor={white}
        />
      </View>
      <View style={signUpTextContainer}>
        <Text style={{...LargeTextStyle, ...text}}>
          If you have an account?{' '}
          <Text
            onPress={handleGoBackPress}
            style={{...LargeTextStyle, ...text, ...styles.signInLinkText}}>
            Sign In here
          </Text>
        </Text>
      </View>
    </View>
    <View style={{flex: 0.2}} />
  </BackGroundView>
);
const styles = StyleSheet.create({
  signUpOptionsContainer: {
    width: wp('60%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  signUpOptionsView: {
    height: hp('6.8%'),
    width: wp('14.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9.4,
    backgroundColor: white,
  },
  signInLinkText: {
    textDecorationLine: 'underline',
    color: green,
  },
});
export default SignUpScreen;
