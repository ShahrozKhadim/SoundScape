import React, {forwardRef} from 'react';
import {TouchableOpacity, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Clear, Email} from '../Assets/SVGIcons';
import {handleClearInput} from '../Utils';
import {customInputStyles, colors} from '../Assets/Styles';

let height = hp('3%');
let width = wp('5.6%');
const {grey, greyDark} = colors;
const {container, emailInput, hideOrShowOrClearContainer} = customInputStyles;

const CustomEmailInput = (
  {
    values,
    handleBlur,
    handleChange,
    style,
    handleOnSubmitEditing,
    editable,
    LeftIcon = Email,
    LeftIconProps,
    RightIcon = Clear,
    RightIconProps,
    placeholder = 'John@soundscape.com',
    placeholderTextColor = greyDark,
  },
  ref,
) => (
  <View style={{...container, ...style}}>
    <LeftIcon height={height} width={width} color={grey} {...LeftIconProps} />
    <TextInput
      ref={ref}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      style={{...emailInput, width: wp('69.5%')}}
      value={values?.email}
      onBlur={handleBlur('email')}
      onChangeText={handleChange('email')}
      keyboardType="email-address"
      onSubmitEditing={handleOnSubmitEditing}
      editable={editable}
      returnKeyType="next"
    />
    <TouchableOpacity
      style={hideOrShowOrClearContainer}
      onPress={() => {
        values.email = '';
        handleClearInput(ref);
      }}>
      {values?.email && (
        <RightIcon
          height={height}
          width={width}
          color={grey}
          {...RightIconProps}
        />
      )}
    </TouchableOpacity>
  </View>
);

export default forwardRef(CustomEmailInput);
