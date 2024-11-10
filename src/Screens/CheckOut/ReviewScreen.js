import React, {forwardRef} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors, LargeTextStyle} from '../../Assets/Styles';

const {black, white} = colors;

const CalculateTotalCost = ({
  text = 'Total',
  price = '$200.00',
  textStyle,
  priceTextStyle,
}) => (
  <View style={styles.paymentTotalContainer}>
    <Text style={{...styles.text, ...textStyle}}>{text}</Text>
    <Text style={{...styles.priceText, ...priceTextStyle}}>{price}</Text>
  </View>
);

const ReviewScreen = forwardRef(
  ({
    refRBSheet,
    cartItems,
    renderCartItems,
    totalPrice,
    subTotal,
    handleSubmit,
  }) => (
    <View style={styles.container}>
      <View style={styles.shoppingItemContainer}>
        <FlatList
          data={cartItems}
          renderItem={renderCartItems}
          keyExtractor={item => item?.id?.toString()}
        />
      </View>
      <View style={styles.rbSheetCustomStyles}>
        <View style={styles.totalCostContainer}>
          <CalculateTotalCost text={'Total'} price={`$${totalPrice}`} />
          <CalculateTotalCost text={'Shipping fee'} price={'$10.0'} />
          <View style={styles.horizontalLine} />
          <CalculateTotalCost
            text={'Subtotal'}
            price={`$${subTotal}`}
            textStyle={styles.priceText}
          />
        </View>
        <View style={styles.rbSheetFooterContainer} />
      </View>
    </View>
  ),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
  },
  shoppingItemContainer: {
    height: hp('50%'),
    alignItems: 'center',
  },
  rbSheetCustomStyles: {
    elevation: 3,
    height: hp('40%'),
    width: wp('100%'),
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  paymentTotalContainer: {
    width: wp('80%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
    fontSize: hp('1.8%'),
    color: black,
  },
  priceText: {
    ...LargeTextStyle,
    fontWeight: '900',
    fontSize: hp('2.2%'),
  },
  horizontalLine: {
    borderWidth: StyleSheet.hairlineWidth,
    width: wp('80%'),
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: white,
  },
  totalCostContainer: {
    flex: 2,
    rowGap: hp('2%'),
    justifyContent: 'center',
  },
  rbSheetFooterContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ReviewScreen;
