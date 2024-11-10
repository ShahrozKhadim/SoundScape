import React, {forwardRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {authStyles, colors, smallTextStyle} from '../Assets/Styles';

const {grey, red, black, greyLightOne} = colors;
const {errorText} = authStyles;

const LabeledInput = (
  {
    label = 'Label',
    placeholder = 'Placeholder',
    placeholderTextColor = grey,
    value,
    required = false,
    onChangeText,
    onChange,
    onBlur,
    isError = false,
    errorMessage = 'Field is required',
    containerStyle,
    textInputStyle,
    errorStyle,
    textAlign,
    labelTextStyle,
    keyboardType,
    textContentType,
    maxLength,
    secureTextEntry = false,
    returnKeyType = 'next',
    onSubmitEditing,
  },
  ref,
) => {
  const onErrorBorderStyle = isError && {
    borderWidth: 1,
    borderColor: red,
  };
  const isRequired = isError && {color: red};
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[smallTextStyle, styles.label, labelTextStyle]}>
        {label}
        {required && <Text style={isRequired}>*</Text>}
      </Text>
      <View style={styles.inputAndErrorContainer}>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          value={value}
          textContentType={textContentType}
          style={[styles.inputStyle, onErrorBorderStyle, textInputStyle]}
          onBlur={onBlur}
          onChange={onChange}
          textAlign={textAlign}
          maxLength={maxLength}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderTextColor}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
        />
        {isError && (
          <Text style={[errorText, styles.errorText, errorStyle]}>
            {errorMessage}
          </Text>
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
    height: hp('6%'),
    width: '100%',
    color: black,
    backgroundColor: greyLightOne,
    borderRadius: hp('1.5%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('2%'),
    fontSize: hp('1.8%'),
  },
  errorText: {
    width: wp('80%'),
  },
  inputAndErrorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default forwardRef(LabeledInput);
