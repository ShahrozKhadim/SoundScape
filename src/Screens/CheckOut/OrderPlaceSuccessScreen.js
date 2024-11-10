import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

import {PrimaryButton, ViewContainer} from '../../Components';
import {colors, LargeTextStyle, smallTextStyle} from '../../Assets/Styles';
import {Images} from '../../Assets/Images';

const {white, grey} = colors;
const {orderPlaceSuccess} = Images;

const OrderPlaceSuccessScreen = ({handleContinueShopping}) => (
  <ViewContainer style={styles.container}>
    <View style={styles.headerContainer}>
      <FastImage style={styles.image} source={orderPlaceSuccess} />
    </View>
    <View style={styles.bodyContainer}>
      <Text style={styles.titleText}>
        Your order has been placed successfully
      </Text>
      <Text style={styles.descriptionText}>
        Thank you for choosing us! Feel free to continue shopping and explore
        our wide range of products. Happy Shopping!
      </Text>
    </View>
    <View style={styles.footerContainer}>
      <PrimaryButton
        handleSubmit={handleContinueShopping}
        textStyle={{...LargeTextStyle, ...styles.buttonText}}
        text={'Continue Shopping'}
      />
    </View>
  </ViewContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('10%'),
    rowGap: hp('2%'),
  },
  footerContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: white,
  },
  image: {
    height: wp('60%'),
    width: wp('60%'),
  },
  titleText: {
    ...LargeTextStyle,
    fontSize: hp('3%'),
    textAlign: 'center',
  },
  descriptionText: {
    ...smallTextStyle,
    color: grey,
    textAlign: 'center',
  },
});

export default OrderPlaceSuccessScreen;
