import React, {forwardRef, useState} from 'react';
import {TouchableOpacity, TextInput, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Password, EyeHidden, EyeShow} from '../Assets/SVGIcons';
import {customInputStyles, colors} from '../Assets/Styles';

const {grey, greyDark} = colors;
const {container, emailInput, hideOrShowOrClearContainer} = customInputStyles;
const switchIcon = {
  true: EyeHidden,
  false: EyeShow,
};
const CustomPasswordInput = (
  {
    values,
    handleBlur,
    handleChange,
    onSubmitEditing,
    editable,
    LeftIcon = Password,
    LeftIconProps,
    placeholderTextColor = greyDark,
    placeholder = '********',
  },
  ref,
) => {
  const [showPassword, setShowPassword] = useState(false);
  let height = hp('3%');
  let width = wp('5.6%');
  const ActiveEyeIcon = switchIcon[showPassword];

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View style={container}>
      <LeftIcon height={height} width={width} color={grey} {...LeftIconProps} />
      <TextInput
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={{...emailInput, width: wp('69.5%')}}
        value={values?.password}
        onBlur={handleBlur('password')}
        onChangeText={handleChange('password')}
        secureTextEntry={!showPassword}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={'done'}
        editable={editable}
      />
      <TouchableOpacity
        style={hideOrShowOrClearContainer}
        onPress={toggleShowPassword}>
        <ActiveEyeIcon height={height} width={width} color={grey} />
      </TouchableOpacity>
    </View>
  );
};
export default forwardRef(CustomPasswordInput);
