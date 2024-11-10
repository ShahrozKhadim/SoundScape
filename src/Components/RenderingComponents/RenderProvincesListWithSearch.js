import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors} from '../../Assets/Styles';

const {black} = colors;

const RenderProvincesListWithSearch = (data, handleSelectFromList) => {
  return (
    <TouchableOpacity
      style={styles.list}
      onPress={() =>
        handleSelectFromList(
          'isSelectProvinceVisible',
          data?.item?.state,
          'province',
        )
      }>
      <Text style={styles.text}>{data?.item?.state}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('90%'),
    paddingHorizontal: wp('3%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('1%'),
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: black,
    fontSize: hp('1.8%'),
  },
});

export default RenderProvincesListWithSearch;
