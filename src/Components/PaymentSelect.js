import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors, LargeTextStyle} from '../Assets/Styles';

const {green, white} = colors;

const PaymentSelect = ({icon, text, selected, onPress}) => (
  <TouchableOpacity
    style={styles.paymentContainer}
    activeOpacity={10}
    onPress={onPress}>
    <View style={styles.iconAndTextContainer}>
      <View style={styles.cardIconContainer}>{icon}</View>
      <Text style={styles.text}>{text}</Text>
    </View>

    <View
      style={
        selected ? styles.radioButtonSelected : styles.radioButtonUnSelected
      }>
      <View style={styles.innerCircle} />
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  paymentContainer: {
    flexDirection: 'row',
    width: wp('85%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    ...LargeTextStyle,
    fontSize: hp('2.2%'),
  },
  radioButtonSelected: {
    backgroundColor: green,
    width: wp('6.3%'),
    height: wp('6.3%'),
    borderRadius: wp('6.3%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonUnSelected: {
    borderWidth: 2,
    borderColor: green,
    width: wp('6.3%'),
    height: wp('6.3%'),
    borderRadius: wp('6.3%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIconContainer: {
    borderRadius: hp('1%'),
    padding: hp('1%'),
  },

  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: wp('3%'),
  },
  innerCircle: {
    height: wp('5%'),
    width: wp('5%'),
    borderWidth: 2,
    borderColor: white,
    borderRadius: wp('5%') / 2,
  },
});

export default PaymentSelect;
