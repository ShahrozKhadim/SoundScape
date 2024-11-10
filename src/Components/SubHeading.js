import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors, LargeTextStyle} from '../Assets/Styles';
import {EditProfile} from '../Assets/SVGIcons';

let height = hp('3%');
let width = wp('5.6%');
const {green} = colors;

const SubHeading = ({
  onPress,
  Icon = EditProfile,
  iconColor = green,
  subHeadingContainerStyle,
  text = 'Placeholder',
  textStyle,
  TouchableStyle,
}) => (
  <View
    style={{
      ...styles.fieldContainer,
      ...styles.subHeadingBorder,
      ...subHeadingContainerStyle,
    }}>
    <Icon height={height} width={width} color={iconColor} />
    <TouchableOpacity style={TouchableStyle} onPress={onPress}>
      <Text style={[subHeadingStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  textStyle: {
    color: '#000',
  },
  subHeadingBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: wp('100%'),
  },
  subHeadingStyle: {
    paddingVertical: 13,
  },
  fieldContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: wp('4%'),
    paddingLeft: wp('10%'),
  },
});
const subHeadingStyle = [
  styles.subHeadingStyle,
  LargeTextStyle,
  styles.textStyle,
  {fontWeight: '400'},
];
export default SubHeading;
