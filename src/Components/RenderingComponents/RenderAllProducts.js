import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, smallTextStyle} from '../../Assets/Styles';
import {Images} from '../../Assets/Images';

const {white} = colors;
const {airpods} = Images;

const RenderAllProducts = ({item, handleProductPress}) => {
  const {name, price} = item;

  return (
    <TouchableOpacity
      style={styles.renderAllProductsContainer}
      onPress={() => handleProductPress(item)}>
      <FastImage
        source={airpods}
        priority={FastImage.priority.normal}
        style={styles.imageStyle}
      />
      <View style={styles.nameAndPriceContainer}>
        <Text style={smallTextStyle} numberOfLines={2} ellipsizeMode={'tail'}>
          {name}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={{...smallTextStyle, ...styles.priceText}}>
            USD {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  renderAllProductsContainer: {
    height: hp('27%'),
    width: wp('44%'),
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: white,
    marginLeft: 10,
    borderRadius: 10,
  },
  imageStyle: {
    height: hp('15%'),
    width: wp('40%'),
    borderRadius: 6,
  },
  nameAndPriceContainer: {
    height: hp('9%'),
    width: wp('45%'),
    justifyContent: 'space-around',
    paddingLeft: '4%',
  },
  priceContainer: {
    justifyContent: 'space-evenly',
  },
  priceText: {
    fontWeight: '700',
    lineHeight: 18.23,
    letterSpacing: 0.2,
  },
});

export default memo(RenderAllProducts);
