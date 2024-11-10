import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {smallTextStyle} from '../Assets/Styles';

const TabHeader = ({text = 'Tab', backgroundColor, onPress}) => (
  <TouchableOpacity style={styles.tabBarAlignCenter} onPress={onPress}>
    <Text style={[smallTextStyle, styles.tabBarText]}>{text}</Text>
    <View
      style={[styles.tabBarBottomWidth, {backgroundColor: backgroundColor}]}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tabBarText: {
    paddingVertical: 5,
    fontSize: hp('2.4%'),
  },
  tabBarBottomWidth: {
    width: wp('10%'),
    paddingVertical: 2,
    borderRadius: 5,
  },
  tabBarAlignCenter: {
    alignItems: 'center',
  },
});

export default TabHeader;
