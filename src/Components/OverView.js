import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {productOverViewData, productReviews, product} from '../Utils/Data';
import {colors, smallTextStyle} from '../Assets/Styles';
import {StarGrid} from './index';
import {Images} from '../Assets/Images';

const {grey, greyLightOne, white} = colors;
const {userAvatar} = Images;

const OverView = () => {
  //user review published time count
  const timeAgo = date => {
    const currentDate = new Date();
    const previousDate = new Date(date);

    const timeDifferenceInSeconds = Math.floor(
      (currentDate - previousDate) / 1000,
    );

    if (timeDifferenceInSeconds < 60) {
      return timeDifferenceInSeconds + ' seconds ago';
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return minutes === 1 ? 'a minute ago' : minutes + ' minutes ago';
    } else if (timeDifferenceInSeconds < 86400) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      return hours === 1 ? 'an hour ago' : hours + ' hours ago';
    } else if (timeDifferenceInSeconds < 2592000) {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      return days === 1 ? 'a day ago' : days + ' days ago';
    } else if (timeDifferenceInSeconds < 31536000) {
      const months = Math.floor(timeDifferenceInSeconds / 2592000);
      return months === 1 ? 'a month ago' : months + ' months ago';
    } else {
      const years = Math.floor(timeDifferenceInSeconds / 31536000);
      return years === 1 ? 'a year ago' : years + ' years ago';
    }
  };
  // render product images here
  const renderItem = ({item}) => (
    <FastImage source={item.image} style={styles.image} />
  );

  // Review product start here
  const renderReviewHeader = () => (
    <View style={renderReviewHeaderStyles.container}>
      <Text style={[smallTextStyle, {fontSize: hp('2.3%')}]}>
        Review ({productReviews?.length}){' '}
      </Text>
    </View>
  );
  const renderReview = ({item}) => (
    <View style={styles.reviewContainer}>
      <View style={renderReviewStyles.userNameAndReviewContainer}>
        <FastImage source={userAvatar} style={renderReviewStyles.userAvatar} />
        <View style={renderReviewStyles.userNameAndStarsContainer}>
          <View style={renderReviewStyles.userNameAndRatingContainer}>
            <Text style={smallTextStyle}>{item?.name}</Text>
            <StarGrid numberOfStars={item?.stars} />
          </View>
          <View style={renderReviewStyles.userReviewTimeContainer}>
            <Text style={[smallTextStyle, renderReviewStyles.timeText]}>
              {timeAgo(item?.time)}
            </Text>
          </View>
        </View>
      </View>
      <Text style={[smallTextStyle, renderReviewStyles.reviewText]}>
        {item?.review}
      </Text>
    </View>
  );
  const renderReviewFooter = () => (
    <View style={renderReviewFooterStyles.footerContainer}>
      <View style={renderReviewFooterStyles.reviewFooterHeaderTitleContainer}>
        <Text style={smallTextStyle}>Another Product</Text>
        <Text style={[smallTextStyle, renderReviewFooterStyles.seeAllText]}>
          See All
        </Text>
      </View>
      <FlatList
        data={product}
        renderItem={renderAllProducts}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
  const renderAllProducts = ({item}) => (
    <View style={[styles.productContainer, renderAllProductStyles.container]}>
      <FastImage
        source={item?.image}
        priority={FastImage.priority.normal}
        resizeMode={FastImage.resizeMode.contain}
        style={renderAllProductStyles.renderAllProductImage}
      />
      <View style={renderAllProductStyles.nameAndPriceContainer}>
        <Text style={smallTextStyle}>{item?.name}</Text>
        <View style={renderAllProductStyles.priceContainer}>
          <Text style={[smallTextStyle, renderAllProductStyles.priceText]}>
            USD {item?.price}
          </Text>
        </View>
      </View>
    </View>
  );
  // Review product ends here

  return (
    <View style={styles.container}>
      <View style={styles.productImagesContainer}>
        <FlatList
          data={productOverViewData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
      <View style={styles.productReviewContainer}>
        <FlatList
          data={productReviews}
          ListHeaderComponent={renderReviewHeader}
          renderItem={renderReview}
          ListFooterComponent={renderReviewFooter}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
const renderAllProductStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: wp('45%'),
  },
  renderAllProductImage: {
    height: hp('15%'),
    width: wp('40%'),
  },
  nameAndPriceContainer: {
    height: hp('10%'),
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
const renderReviewHeaderStyles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginLeft: 30,
  },
});
const renderReviewStyles = StyleSheet.create({
  userNameAndReviewContainer: {
    flexDirection: 'row',
  },
  userAvatar: {
    height: hp('5%'),
    width: wp('11%'),
    borderRadius: 40,
  },
  userNameAndStarsContainer: {
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  userNameAndRatingContainer: {},
  userReviewTimeContainer: {
    marginRight: 10,
  },
  reviewText: {
    marginLeft: 55,
  },
  timeText: {
    color: grey,
  },
});
const renderReviewFooterStyles = StyleSheet.create({
  seeAllText: {
    color: grey,
  },
  footerContainer: {
    backgroundColor: greyLightOne,
    marginBottom: 50,
  },
  reviewFooterHeaderTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '5%',
    backgroundColor: white,
  },
  productImagesContainer: {
    flex: 0.6,
  },
  image: {
    height: hp('35%'),
    width: wp('70%'),
    borderRadius: 10,
    marginLeft: 10,
  },
  productReviewContainer: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
  },
  reviewContainer: {
    width: wp('90%'),
    marginLeft: 30,
    marginVertical: 10,
  },

  productContainer: {
    height: hp('27%'),
    width: wp('70%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: white,
    marginLeft: 15,
    marginVertical: 30,
    borderRadius: 10,
  },
  categoryItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 15,
    marginLeft: 20,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
});
export default OverView;
