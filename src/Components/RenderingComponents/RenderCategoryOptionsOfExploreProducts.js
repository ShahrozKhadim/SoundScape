import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {colors, smallTextStyle} from '../../Assets/Styles';

const {green, white, black} = colors;
const switchBackgroundColor = {
  true: green,
  false: 'transparent',
};
const switchColor = {
  true: white,
  false: black,
};

const RenderCategoryOptionsOfExploreProducts = ({
  item,
  selectedCategory,
  handleCategoryOptionsPress,
}) => {
  const isActive = item === selectedCategory;
  const color = switchColor[isActive];
  const backgroundColor = switchBackgroundColor[isActive];

  return (
    <TouchableOpacity
      style={{...styles.categoryItem, backgroundColor}}
      onPress={() => handleCategoryOptionsPress(item)}>
      <Text style={{...smallTextStyle, color}}>{item}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  categoryItem: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
});
export default RenderCategoryOptionsOfExploreProducts;
