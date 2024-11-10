import {StatusBar, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const colors = {
  black: '#000000',
  white: '#ffffff',
  greyLightOne: '#F6F6F6',
  greyLightTwo: '#F3F3F3',
  grey: '#BABABA',
  greyDark: '#7F7F7F',
  green: '#0ACF83',
  yellow: '#FFC120',
  red: '#FF0000',
  redLight: '#FF2E2E',
};
export const buttonStyle = {
  height: hp('6.4%'),
  width: wp('90%'),
  backgroundColor: colors.green,
  borderRadius: 10,
};
export const LargeTextStyle = {
  fontWeight: '700',
  fontSize: hp('2%'),
  letterSpacing: 0.24,
  color: colors.black,
};
export const smallTextStyle = {
  fontWeight: '400',
  fontSize: hp('1.8%'),
  lineHeight: 20,
  color: colors.black,
};
export const authStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logInText: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
  },
  loginInputContainer: {
    flex: 2.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: hp('1.8%'),
  },
  titleText: {
    fontSize: hp('5.7%'),
    color: colors.white,
  },
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp('70%'),
  },
  errorText: {
    color: 'red',
    width: wp('85%'),
  },
  statusBarContent: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
export const customInputStyles = StyleSheet.create({
  container: {
    height: hp('6.4%'),
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  emailInput: {
    height: hp('6.4%'),
    fontSize: hp('1.8%'),
    color: colors.black,
  },
  hideOrShowOrClearContainer: {
    position: 'absolute',
    right: 10,
  },
});
export const modalStyles = StyleSheet.create({
  modalStyle: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: wp('90%'),
    paddingTop: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalHeader: {
    width: wp('100%'),
    alignItems: 'center',
    padding: 16,
    paddingBottom: 0,
  },
  modalBody: {
    width: wp('90%'),
    alignItems: 'center',
    padding: 16,
    paddingHorizontal: 20,
  },
  modalFooter: {
    width: wp('85%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
  },
  okButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: colors.green,
  },
  messageText: {
    textAlign: 'center',
  },
  circle: {
    height: wp('14.5%'),
    width: wp('14.5%'),
    borderRadius: wp('14.5%') / 2,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    top: -25,
  },
});
export const iconPadding = {padding: wp('2%')};
