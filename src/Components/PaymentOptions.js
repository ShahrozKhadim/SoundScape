import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Google, Master_Card, PayPal} from '../Assets/SVGIcons';
import {PaymentSelect} from './index';
import {authStyles, colors} from '../Assets/Styles';

const {red} = colors;
const {errorText} = authStyles;

const PaymentOptions = ({
  paymentOption,
  isError,
  errorMessage,
  errorStyle,
  handleOptionSelect,
}) => {
  const borderStyle = isError && {
    borderWidth: 1,
    borderColor: red,
    borderRadius: hp('2%'),
  };
  return (
    <View style={[styles.container, borderStyle]}>
      <PaymentSelect
        text={'Credit Card'}
        icon={<Master_Card height={hp('5%')} width={wp('10%')} />}
        selected={paymentOption === 'Credit Card'}
        onPress={() => handleOptionSelect('Credit Card')}
      />
      <PaymentSelect
        text={'PayPal'}
        icon={<PayPal height={hp('5%')} width={wp('10%')} />}
        selected={paymentOption === 'Paypal'}
        onPress={() => handleOptionSelect('Paypal')}
      />
      <PaymentSelect
        text={'Google Play'}
        icon={<Google height={hp('5%')} width={wp('10%')} />}
        selected={paymentOption === 'Google Play'}
        onPress={() => handleOptionSelect('Google Play')}
      />
      {isError && (
        <Text style={[errorText, styles.errorText, errorStyle]}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    alignItems: 'center',
    rowGap: hp('1%'),
  },
  errorText: {
    width: wp('80%'),
  },
});

export default PaymentOptions;
