import React, {memo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, LargeTextStyle, smallTextStyle} from '../Assets/Styles';
import {categoryList, sortOptions} from '../Utils/Data';
import {Cross} from '../Assets/SVGIcons';
import {PrimaryButton} from './index';

const {green, white, greyDark, black, grey} = colors;

const FilterRBSheet = ({handleSubmit, handleCloseRBSheetPress, filter}) => {
  const [selectedCategory, setSelectedCategory] = useState(filter?.category);
  const [sortSelectedCategory, setSortSelectedCategory] = useState(
    filter?.sortBy,
  );
  const [priceRange, setPriceRange] = useState({
    minimum: filter.priceRange.minimum.toString(),
    maximum: filter.priceRange.maximum.toString(),
  });
  const [error, setError] = useState('');
  const handleCategoryItemClick = item => setSelectedCategory(item);
  const handleSortItemClick = item => setSortSelectedCategory(item);
  const handleFilterSubmit = (category, sortBy, minAndMaxPrice) => {
    // Convert user input to numeric values (floats)
    const minPrice = parseFloat(minAndMaxPrice.minimum);
    const maxPrice = parseFloat(minAndMaxPrice.maximum);

    // Check for valid numeric input
    if (minPrice < 0 || maxPrice < 0) {
      setError('Prices cannot be negative.');
    } else if (minPrice > maxPrice) {
      setError('Min price cannot be greater than max price.');
    } else {
      handleSubmit(category, sortBy, minAndMaxPrice);
    }
  };
  const renderCategoryList = ({item}) => {
    const isSelected = item === selectedCategory;
    return (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          {
            backgroundColor: isSelected ? green : null,
          },
        ]}
        onPress={() => handleCategoryItemClick(item)}>
        <Text
          style={[
            smallTextStyle,
            {
              color: isSelected ? white : greyDark,
            },
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderSortCategoryList = ({item}) => {
    const isSelected = item === sortSelectedCategory;
    return (
      <TouchableOpacity
        style={[
          styles.sortCategoryItem,
          {
            backgroundColor: isSelected ? green : null,
            borderWidth: isSelected ? 0 : 1,
            borderColor: isSelected ? green : null,
          },
        ]}
        onPress={() => handleSortItemClick(item)}>
        <Text
          style={[
            smallTextStyle,
            {
              color: isSelected ? white : greyDark,
            },
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterHeaderContainer}>
        <Text style={[LargeTextStyle, {fontSize: hp('2.8%')}]}>Filter</Text>
        <TouchableOpacity onPress={handleCloseRBSheetPress}>
          <Cross height={hp('3%')} width={wp('5%')} color={black} />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={[smallTextStyle, styles.labelText]}>Category</Text>
        <FlatList
          data={categoryList}
          renderItem={renderCategoryList}
          horizontal={true}
        />
      </View>
      <View style={styles.sortCategoryContainer}>
        <Text style={[smallTextStyle, styles.labelText]}>Sort by</Text>
        <FlatList
          data={sortOptions}
          renderItem={renderSortCategoryList}
          numColumns={3}
        />
      </View>
      <View style={styles.priceRangeInputAndLabelContainer}>
        <Text style={[smallTextStyle, styles.labelText]}>Price Range</Text>
        <View style={styles.priceRangeInputContainer}>
          <TextInput
            placeholderTextColor={grey}
            value={priceRange?.minimum}
            placeholder={'1.00'}
            style={styles.priceRangeInput}
            onChangeText={text =>
              setPriceRange({
                minimum: text.toString(),
                maximum: priceRange.maximum,
              })
            }
            keyboardType={'number-pad'}
            maxLength={7}
          />
          <TextInput
            placeholderTextColor={grey}
            value={priceRange?.maximum}
            placeholder={'100.00'}
            style={styles.priceRangeInput}
            onChangeText={text =>
              setPriceRange({
                maximum: text.toString(),
                minimum: priceRange.minimum,
              })
            }
            keyboardType={'number-pad'}
            maxLength={7}
          />
        </View>
        {error && <Text style={styles.warningText}>{error}</Text>}
      </View>
      <PrimaryButton
        buttonStyles={styles.submitButtonStyles}
        textStyle={{...LargeTextStyle, ...styles.submitButton}}
        text={'Apply Filter'}
        handleSubmit={() =>
          handleFilterSubmit(selectedCategory, sortSelectedCategory, priceRange)
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filterHeaderContainer: {
    width: wp('90%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 10,
  },
  categoryContainer: {
    height: hp('8%'),
  },
  sortCategoryContainer: {
    height: hp('16%'),
    width: wp('90%'),
  },
  categoryItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    marginRight: 3,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  sortCategoryItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  priceRangeInput: {
    height: hp('6.5%'),
    width: wp('40%'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: grey,
    paddingHorizontal: 15,
    color: black,
  },
  labelText: {
    bottom: 10,
    fontSize: hp('2%'),
  },
  submitButton: {
    color: white,
    fontWeight: '500',
  },
  priceRangeInputAndLabelContainer: {
    height: hp('8.5%'),
    width: wp('90%'),
  },
  priceRangeInputContainer: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButtonStyles: {
    width: wp('90%'),
  },
  warningText: {
    color: 'red',
    position: 'absolute',
    bottom: 0,
  },
});
export default memo(FilterRBSheet);
