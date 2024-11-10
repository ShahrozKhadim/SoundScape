import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../Assets/Styles';
import {SearchBar} from '../Assets/SVGIcons';

const {grey, greyDark, white, black} = colors;

const CustomSearchBar = ({
  handleSubmitPress,
  editable,
  handleChange,
  placeholder = 'Search headphones',
  returnKeyType = 'search',
}) => (
  <View style={{...styles.container, borderColor: grey, borderWidth: 1}}>
    <SearchBar height={hp('4.5%')} width={wp('4.5%')} color={grey} />
    <TextInput
      editable={editable}
      placeholder={placeholder}
      placeholderTextColor={greyDark}
      onChangeText={handleChange}
      onSubmitEditing={handleSubmitPress}
      style={styles.emailInput}
      returnKeyType={returnKeyType}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: hp('6.5%'),
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: white,
  },
  emailInput: {
    height: hp('6%'),
    width: wp('75%'),
    fontSize: hp('1.8%'),
    color: black,
  },
});
export default CustomSearchBar;
