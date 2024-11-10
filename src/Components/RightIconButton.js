import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {buttonStyle, colors, smallTextStyle} from '../Assets/Styles';
import {RightArrow} from '../Assets/SVGIcons';

const {white} = colors;

const RightIconButton = ({text, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{...styles.container, ...buttonStyle}}>
    <Text style={{...smallTextStyle, ...styles.text}}>{text}</Text>
    <RightArrow height={hp('5%')} width={wp('4%')} color={white} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '6%',
  },
  text: {
    color: white,
  },
});
export default RightIconButton;
