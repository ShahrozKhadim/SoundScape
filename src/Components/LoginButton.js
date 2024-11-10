import React from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Apple} from '../Assets/SVGIcons';
import {colors} from '../Assets/Styles';
import {Platforms} from '../Constants';

const {OS} = Platform;
const {IOS} = Platforms;
const {black, white} = colors;

const LoginButton = ({
  onPress,
  iconColor = black,
  Icon = Apple,
  containerStyle = {},
  iconHeight = hp('7%'),
  iconWidth = wp('7%'),
  showOnAndroid = true,
}) => {
  if (OS !== IOS && !showOnAndroid) {
    return null;
  }
  return (
    <TouchableOpacity
      style={{...styles.signUpOptionsView, ...containerStyle}}
      onPress={onPress}>
      <Icon height={iconHeight} width={iconWidth} color={iconColor} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  signUpOptionsView: {
    height: hp('6.8%'),
    width: wp('14.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9.4,
    backgroundColor: white,
  },
});
export default LoginButton;
