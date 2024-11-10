import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors, smallTextStyle} from '../../Assets/Styles';
import {MenuVertical, Star} from '../../Assets/SVGIcons';

const {yellow, black} = colors;

const RenderPopularProducts = ({item, styles}) => (
  <View key={item.id.toString()} style={styles.renderPopularProductContainer}>
    <View style={styles.popularProductImageContainer}>
      <FastImage
        source={item?.image}
        style={styles.image}
        resizeMode={'contain'}
      />
    </View>
    <View style={styles.renderPopularProductDetailsContainer}>
      <View>
        <Text style={smallTextStyle}>{item.name}</Text>
        <Text style={smallTextStyle}>USD {item.price}</Text>
      </View>
      <View style={styles.ratingAndReviewContainer}>
        <View style={styles.ratingContainer}>
          <Star height={hp('2%')} width={wp('3.5%')} color={yellow} />
          <Text style={styles.ratingAndReviewText}>{item?.star || '4.6'}</Text>
        </View>
        <Text style={styles.ratingAndReviewText}>
          {item?.reviews || '86'} Reviews
        </Text>
      </View>
    </View>
    <View style={styles.renderPopularProductMenuOptionsContainer}>
      <MenuVertical height={hp('2%')} width={wp('3%')} color={black} />
    </View>
  </View>
);
export default RenderPopularProducts;
