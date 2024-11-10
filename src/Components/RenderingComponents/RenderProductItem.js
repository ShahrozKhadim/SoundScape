import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, iconPadding, smallTextStyle} from '../../Assets/Styles';
import {RightIcon} from '../../Assets/SVGIcons';
import {Images} from '../../Assets/Images';

const {white, green} = colors;
const {headphone} = Images;

const RenderProductItem = ({item, handleShopNowPress}) => {
  const {name} = item;

  return (
    <View style={styles.productContainer}>
      <View style={styles.nameAndPriceContainer}>
        <Text
          style={{...smallTextStyle, ...styles.text}}
          numberOfLines={3}
          ellipsizeMode={'tail'}>
          {name}
        </Text>
        <TouchableOpacity
          style={styles.showNowAndRightIconContainer}
          onPress={() => handleShopNowPress(item)}>
          <Text style={styles.shopNowText}>Shop Now</Text>
          <RightIcon height={hp('3%')} width={wp('5%')} color={green} />
        </TouchableOpacity>
      </View>
      <FastImage
        source={headphone}
        priority={'normal'}
        resizeMode={'contain'}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    height: hp('24%'),
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: white,
    marginLeft: 10,
    borderRadius: 10,
  },
  text: {
    height: hp('15%'),
    fontSize: hp('2.7%'),
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: 0.2,
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
  nameAndPriceContainer: {
    width: wp('50%'),
    height: hp('25%'),
    justifyContent: 'space-evenly',
    paddingLeft: '2%',
  },
  showNowAndRightIconContainer: {
    width: wp('30%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    ...iconPadding,
    columnGap: hp('1%'),
  },
  shopNowText: {
    color: green,
    fontWeight: '700',
    fontSize: hp('2%'),
    lineHeight: 18.23,
    letterSpacing: 0.2,
  },
  image: {
    height: hp('20%'),
    width: wp('35%'),
  },
});
export default memo(RenderProductItem);
