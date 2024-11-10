import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, smallTextStyle} from '../../Assets/Styles';
import {PlusIcon, Remove, SubtractIcon} from '../../Assets/SVGIcons';
import {Images} from '../../Assets/Images';

const {black, greyLightOne} = colors;
const {headphone} = Images;

const RenderCartItems = ({
  item,
  handleCartItemIncrement,
  handleCartItemDecrement,
  handleRemoveCartItem,
}) => (
  <View style={styles.cartItemContainer}>
    <View style={styles.cartItemImageContainer}>
      <FastImage
        source={headphone}
        style={styles.cartItemImage}
        resizeMode={'contain'}
      />
    </View>
    <View style={styles.cartItemNamePriceAndModificationContainer}>
      <View style={styles.cartItemNameAndPriceContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode={'tail'}
          style={[
            smallTextStyle,
            styles.cartItemText,
            {marginVertical: hp('0.7%')},
          ]}>
          {item?.name}
        </Text>
        <Text style={[smallTextStyle, styles.cartItemText]}>
          USD {item?.price}
        </Text>
      </View>
      <View style={styles.cartItemModificationContainer}>
        <View style={styles.modificationContainer}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => handleCartItemDecrement(item.id)}>
            <SubtractIcon height={hp('3%')} width={wp('6%')} color={black} />
          </TouchableOpacity>
          <Text style={[smallTextStyle, styles.cartItemText]}>
            {item?.product_quantity}
          </Text>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => handleCartItemIncrement(item.id)}>
            <PlusIcon height={hp('3%')} width={wp('6%')} color={black} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleRemoveCartItem(item.id)}>
          <Remove height={hp('3%')} width={wp('6%')} color={black} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  cartItemContainer: {
    width: wp('90%'),
    flexDirection: 'row',
    marginVertical: 10,
  },
  cartItemImageContainer: {
    width: wp('25%'),
    backgroundColor: greyLightOne,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  cartItemText: {
    color: black,
  },
  cartItemNameAndPriceContainer: {},
  cartItemImage: {
    height: hp('13%'),
    width: wp('25%'),
    borderRadius: 20,
  },
  cartItemNamePriceAndModificationContainer: {
    width: wp('60%'),
    justifyContent: 'space-between',
  },
  cartItemModificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    height: hp('3%'),
    width: wp('6%'),
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modificationContainer: {
    gap: wp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default RenderCartItems;
