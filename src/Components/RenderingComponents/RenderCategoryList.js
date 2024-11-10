import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, smallTextStyle} from '../../Assets/Styles';

const {green, white, greyDark} = colors;
const switchBackgroundColor = {
  true: green,
  false: 'transparent',
};
const switchColor = {
  true: white,
  false: greyDark,
};

const RenderCategoryList = ({item = '', handleItemClick, selectedCategory}) => {
  const isActive = item === selectedCategory;
  const color = switchColor[isActive];
  const backgroundColor = switchBackgroundColor[isActive];

  return (
    <TouchableOpacity
      style={{...styles.categoryItem, backgroundColor}}
      onPress={() => handleItemClick(item)}>
      <Text style={{...smallTextStyle, color}}>{item}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  categoryItem: {
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.8%'),
    marginVertical: hp('0.7%'),
    marginLeft: wp('3%'),
    borderRadius: hp('3%'),
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
});

export default RenderCategoryList;
