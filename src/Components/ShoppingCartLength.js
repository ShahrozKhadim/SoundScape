import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../Assets/Styles';
import {isNotEmpty} from '../Utils/helpers';

const {green} = colors;
const {View, Text} = Animated;

const ShoppingCartLength = ({cartItemsLength, animationStyle}) => {
  if (!isNotEmpty(cartItemsLength)) {
    return null;
  }
  return (
    <View style={{...styles.shoppingCartLengthContainer, ...animationStyle}}>
      <Text style={{...styles.shoppingCartLength, ...animationStyle}}>
        {cartItemsLength}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  shoppingCartLengthContainer: {
    height: wp('4.5%'),
    width: wp('4.5%'),
    borderRadius: 13,
    backgroundColor: green,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    top: hp('1%'),
  },
  shoppingCartLength: {
    fontSize: hp('1.3%'),
  },
});
export default ShoppingCartLength;
