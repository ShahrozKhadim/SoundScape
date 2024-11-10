import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {authStyles, colors} from '../Assets/Styles';
import {DropDown} from '../Assets/SVGIcons';
import {ProvincesListWithSearchModal} from './index';

const {red, black, greyLightOne} = colors;
const {errorText} = authStyles;
const ProvincesListDropDown = ({
  title = 'Select Province',
  data,
  setSearchInput,
  isOpen,
  handleSelectFromList,
  searchPlaceholder,
  isError = false,
  errorMessage = 'Filed is required',
}) => {
  const onErrorBorderStyle = isError && {
    borderWidth: 1,
    borderColor: red,
  };
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity
        style={[styles.container, onErrorBorderStyle]}
        onPress={() => handleSelectFromList('isSelectProvinceVisible', {})}>
        <Text style={styles.label}>{title}</Text>
        <DropDown height={hp('4%')} width={wp('4%')} color={black} />
        <ProvincesListWithSearchModal
          visible={isOpen}
          placeholder={searchPlaceholder}
          data={data}
          setSearchInput={setSearchInput}
          handleSelectFromList={handleSelectFromList}
        />
      </TouchableOpacity>
      {isError && (
        <Text style={[errorText, styles.errorText]}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',
  },
  container: {
    height: hp('6%'),
    width: wp('85%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: greyLightOne,
    borderRadius: hp('1.5%'),
    paddingRight: hp('2%'),
  },
  label: {
    color: black,
    fontWeight: 'bold',
    fontSize: hp('1.8%'),
    paddingHorizontal: hp('2%'),
  },
  errorText: {
    width: wp('80%'),
  },
});

export default ProvincesListDropDown;
