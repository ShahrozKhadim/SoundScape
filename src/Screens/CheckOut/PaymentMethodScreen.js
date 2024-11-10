import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {LabeledInput, PaymentOptions} from '../../Components';
import {colors} from '../../Assets/Styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {INPUT_FOCUS} from '../../Utils';

const {white} = colors;

const PaymentMethodScreen = ({
  phoneInputRef,
  setSearchInput,
  countriesList,
  provincesList,
  selectVisibility,
  handleSelectFromList,
  selectedLocation,
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  formikStateKeys,
  handlePhoneNumberChange,
  handleOptionSelect,
  handleCardDetails,
  paymentOption,
  cardDetail,
  handleExpiryDate,
  handleCardNumber,
  refs,
}) => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <PaymentOptions
      handleOptionSelect={handleOptionSelect}
      paymentOption={paymentOption}
      isError={errors?.paymentMethod && touched?.paymentMethod}
      errorMessage={errors?.paymentMethod}
    />
    <LabeledInput
      ref={refs?.cardHolderName}
      value={values.cardHolderName}
      label={'Card Holder Name'}
      placeholder={'Enter card holder name'}
      textContentType={'creditCardName'}
      maxLength={50}
      onChangeText={text => handleCardDetails(formikStateKeys[0], text)}
      onBlur={handleBlur(formikStateKeys[0])}
      isError={errors?.cardHolderName && touched?.cardHolderName}
      errorMessage={errors?.cardHolderName}
      onSubmitEditing={() => INPUT_FOCUS(refs?.cardNumber)}
    />
    <LabeledInput
      ref={refs?.cardNumber}
      value={cardDetail?.cardNumber}
      label={'Card Number'}
      placeholder={'4111 111 111 1111'}
      maxLength={19}
      textContentType={'creditCardNumber'}
      keyboardType={'number-pad'}
      onChangeText={text => handleCardNumber(formikStateKeys[1], text)}
      onBlur={handleBlur(formikStateKeys[1])}
      isError={errors?.cardNumber && touched?.cardNumber}
      errorMessage={errors?.cardNumber}
      onSubmitEditing={() => INPUT_FOCUS(refs?.expiryDate)}
    />
    <View style={styles.expiryDataAndCVVContainer}>
      <LabeledInput
        ref={refs?.expiryDate}
        value={cardDetail.expiryDate}
        label={'Expiry Date'}
        labelTextStyle={styles.labelTextStyle}
        containerStyle={styles.expiry}
        errorStyle={styles.error}
        placeholder={'MM/YY'}
        textAlign={'center'}
        maxLength={5}
        keyboardType={'number-pad'}
        onChangeText={text => handleExpiryDate(formikStateKeys[2], text)}
        onBlur={handleBlur(formikStateKeys[2])}
        isError={errors?.expiryDate && touched?.expiryDate}
        errorMessage={errors?.expiryDate}
        onSubmitEditing={() => INPUT_FOCUS(refs?.cvv)}
      />
      <LabeledInput
        ref={refs?.cvv}
        value={cardDetail.cvv}
        label={'CVV'}
        textContentType={'creditCardSecurityCode'}
        labelTextStyle={styles.labelTextStyle}
        textAlign={'center'}
        maxLength={3}
        containerStyle={styles.cvv}
        placeholder={'123'}
        keyboardType={'number-pad'}
        errorStyle={styles.error}
        onChangeText={text => handleCardDetails(formikStateKeys[3], text)}
        onBlur={handleBlur(formikStateKeys[3])}
        isError={errors?.cvv && touched?.cvv}
        errorMessage={errors?.cvv}
        secureTextEntry={true}
        returnKeyType={'done'}
        onSubmitEditing={handleSubmit}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  scrollContainer: {
    width: wp('100%'),
    alignItems: 'center',
    rowGap: hp('2.5%'),
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 4,
    alignItems: 'center',
    rowGap: hp('2%'),
  },
  footerContainer: {
    flex: 0.5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: white,
  },
  expiryDataAndCVVContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expiry: {
    width: wp('35%'),
  },
  cvv: {
    width: wp('25%'),
  },
  labelTextStyle: {
    textAlign: 'center',
  },
  error: {
    width: wp('30%'),
    textAlign: 'center',
  },
});

export default PaymentMethodScreen;
