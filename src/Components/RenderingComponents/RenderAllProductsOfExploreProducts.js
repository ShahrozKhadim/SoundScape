import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, smallTextStyle} from '../../Assets/Styles';
import {MenuVertical, Star} from '../../Assets/SVGIcons';
import {Images} from '../../Assets/Images';

const {yellow, grey, white} = colors;
const {airpods} = Images;

const RenderAllProductsOfExploreProducts = ({
  item,
  handleProductPress,
  handleMenuPress,
}) => {
  const {name, price, rating, review} = item;
  const ratings = rating.split('.')[0];
  const reviews = review.split('.')[0];

  return (
    <TouchableOpacity
      style={{...styles.productContainer}}
      onPress={() => handleProductPress(item)}>
      <FastImage source={airpods} priority={'normal'} style={styles.image} />
      <View style={styles.productDetailContainer}>
        <Text style={smallTextStyle} numberOfLines={2} ellipsizeMode={'tail'}>
          {name}
        </Text>
        <View style={styles.priceAndRatingContainer}>
          <Text style={{...smallTextStyle, ...styles.priceText}}>
            USD {price}
          </Text>
          <View style={styles.ratingContainer}>
            <View style={styles.totalRatingsContainer}>
              <Star height={hp('1.8%')} width={wp('5%')} color={yellow} />
              <Text style={{...smallTextStyle, ...styles.ratingText}}>
                {ratings}
              </Text>
              <Text style={{...smallTextStyle, ...styles.reviewText}}>
                {reviews} Reviews
              </Text>
            </View>
            <TouchableOpacity
              style={styles.verticalIconContainer}
              onPress={e => handleMenuPress(item, e)}>
              <MenuVertical height={hp('2.5%')} width={wp('3%')} color={grey} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    height: hp('30%'),
    width: wp('44%'),
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: white,
    margin: 8,
    borderRadius: 10,
  },
  ratingContainer: {
    height: hp('3.5%'),
    width: wp('40%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalRatingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: hp('1.5%'),
    lineHeight: 13.02,
    letterSpacing: 0.2,
  },
  reviewText: {
    fontSize: hp('1.5%'),
    lineHeight: 13.02,
    letterSpacing: 0.2,
    marginLeft: 10,
  },
  priceText: {
    fontWeight: '700',
    lineHeight: 18.23,
    letterSpacing: 0.2,
  },
  image: {
    height: hp('15%'),
    width: wp('40%'),
    borderRadius: 5,
  },
  productDetailContainer: {
    height: hp('12%'),
    width: wp('45%'),
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  priceAndRatingContainer: {
    justifyContent: 'space-evenly',
  },
  verticalIconContainer: {zIndex: 1, padding: wp('2%')},
});
export default RenderAllProductsOfExploreProducts;
