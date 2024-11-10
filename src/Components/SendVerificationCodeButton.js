import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {buttonStyle, colors, smallTextStyle} from '../Assets/Styles';
import CountdownTimer from './CountDownTimer';

const {white} = colors;

const SendVerificationCodeButton = ({
  text,
  handleSubmit,
  isLoading,
  buttonRef,
  textStyle,
  buttonStyles,
  handleStopTimer,
}) => (
  <TouchableOpacity
    ref={buttonRef}
    style={[buttonStyle, styles.container, buttonStyles]}
    disabled={isLoading}
    onPress={handleSubmit}>
    {isLoading ? (
      <CountdownTimer inSeconds={60} handleStopTimer={handleStopTimer} />
    ) : (
      <Text style={[smallTextStyle, styles.text, textStyle]}>{text}</Text>
    )}
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    height: hp('6.4%'),
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: white,
  },
});
export default SendVerificationCodeButton;
