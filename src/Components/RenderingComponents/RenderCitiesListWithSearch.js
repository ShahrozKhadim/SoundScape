import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors} from '../../Assets/Styles';

const {black} = colors;

const RenderCitiesListWithSearch = (data, handleSelectFromList) => {
  const countryCode =
    data?.item?.countryCode ||
    data?.item?.countryCode2 ||
    data?.item?.countryCode3;
  const selectedItem = `${data?.item?.name} (${countryCode})`;
  return (
    <TouchableOpacity
      style={styles.list}
      onPress={() =>
        handleSelectFromList('isSelectCityVisible', selectedItem, 'city')
      }>
      <Text style={styles.text}>{data?.item?.name}</Text>
      <Text style={styles.text}>{countryCode}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default RenderCitiesListWithSearch;
