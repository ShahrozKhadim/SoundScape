import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Clock, Cross} from '../Assets/SVGIcons';
import {colors, smallTextStyle} from '../Assets/Styles';

const {greyDark, black} = colors;

const RenderSearchHistory = ({
  index,
  item,
  handleRemoveHistoryItemPress,
  styles,
  handleHistoryItemPress,
}) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.renderSearchHistoryContainer}
      onPress={() => {
        let id = item.type === 'Search' ? item.id : item.productId;
        handleHistoryItemPress(item.type, item.query, id);
      }}>
      <Clock height={hp('3%')} width={wp('6%')} color={greyDark} />
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={[smallTextStyle, styles.renderHistoryText]}>
        {item.query}
      </Text>
      <TouchableOpacity
        onPress={() => handleRemoveHistoryItemPress(item.id, item.timestamp)}>
        <Cross height={hp('3%')} width={wp('6%')} color={black} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default RenderSearchHistory;
