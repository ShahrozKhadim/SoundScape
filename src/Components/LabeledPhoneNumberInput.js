import React, {forwardRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import PhoneInput from 'react-native-phone-number-input';

import {authStyles, colors, smallTextStyle} from '../Assets/Styles';

const {red, black, greyLightOne} = colors;
const {errorText} = authStyles;
const LabeledPhoneNumberInput = (
  {
    label = 'Label',
    value,
    required = false,
    onChangeText,
    onChangeFormattedText,
    containerStyle,
    textContainerStyle,
    isError = false,
    errorMessage = 'Field is required',
    onBlur,
    onChangeCountry,
    phoneNumber,
    onSubmitEditing,
    returnKeyType = 'next',
  },
  ref,
) => {
  const onErrorBorderStyle = isError && {
    borderWidth: 1,
    borderColor: red,
  };
  const isRequired = isError && {color: red};
  return (
    <View style={styles.container}>
      <Text style={[smallTextStyle, styles.label]}>
        {label}
        {required && <Text style={isRequired}>*</Text>}
      </Text>
      <View style={styles.inputAndErrorContainer}>
        <PhoneInput
          ref={ref}
          defaultValue={value}
          defaultCode={phoneNumber?.country?.cca2}
          layout="second"
          onChangeCountry={onChangeCountry}
          onChangeText={text => onChangeText(text)}
          onChangeFormattedText={text => onChangeFormattedText(text)}
          containerStyle={[
            styles.inputStyle,
            onErrorBorderStyle,
            containerStyle,
          ]}
          textInputProps={{
            placeholder: label,
            placeholderTextColor: black,
            onBlur: onBlur,
            style: styles.textInputProps,
            onSubmitEditing: onSubmitEditing,
            returnKeyType: returnKeyType,
          }}
          flagButtonStyle={styles.flagButtonStyle}
          textContainerStyle={[styles.textContainerStyle, textContainerStyle]}
        />
        {isError && (
          <Text style={[errorText, styles.errorText]}>{errorMessage}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    paddingHorizontal: hp('1%'),
    rowGap: hp('1%'),
  },
  label: {
    width: '100%',
    color: black,
    fontWeight: 'bold',
    paddingHorizontal: hp('2%'),
  },
  inputStyle: {
    width: '100%',
    height: hp('6%'),
    backgroundColor: greyLightOne,
    borderRadius: hp('1.5%'),
    color: black,
    padding: 0,
  },
  textContainerStyle: {
    backgroundColor: greyLightOne,
    borderRadius: hp('1.5%'),
    padding: 0,
    color: black,
  },
  textInputProps: {
    padding: 5,
    color: black,
    height: hp('5%'),
    fontSize: hp('1.8%'),
  },
  flagButtonStyle: {
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  errorText: {
    width: wp('80%'),
  },
  inputAndErrorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default forwardRef(LabeledPhoneNumberInput);
