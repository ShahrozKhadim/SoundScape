import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, smallTextStyle} from '../Assets/Styles';
import {SearchBar} from '../Assets/SVGIcons';

const {greyDark} = colors;

const RenderSearch = ({index, item, styles, handleSearchInteraction}) => {
  return (
    <TouchableOpacity
      key={index}
      style={[
        styles.renderSearchHistoryContainer,
        {paddingVertical: 0, marginVertical: 0},
      ]}
      onPress={() => handleSearchInteraction(item, 'Product')}>
      <SearchBar height={hp('6%')} width={wp('6%')} color={greyDark} />
      <Text style={[smallTextStyle, styles.renderHistoryText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
export default RenderSearch;
