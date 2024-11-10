import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {
  CustomSearchBar,
  RenderSearch,
  RenderSearchHistory,
} from '../Components';
import Header from '../Components/Header';
import {colors, LargeTextStyle} from '../Assets/Styles';

const {white} = colors;

const SearchScreen = ({
  userSearch,
  renderPopularProduct,
  handleBackPress,
  handleSubmitPress,
  handleSearch,
  pressIn,
  searchHistory,
  handleSearchInteraction,
  handleHistoryItemPress,
  handleRemoveHistoryItemPress,
  styling,
  search,
  handleShoppingCartPress,
  cartItemLength,
}) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Header
        screenName={'Search'}
        iconName={'Shopping Cart'}
        handleBackPress={handleBackPress}
        handleShoppingCartPress={handleShoppingCartPress}
        cartItemLength={cartItemLength}
      />
      <View style={{marginBottom: '5%'}}>
        <CustomSearchBar
          editable={true}
          handleSubmitPress={handleSubmitPress}
          handleChange={handleSearch}
        />
      </View>
    </View>
    <View style={styles.searchHistoryContainer}>
      {pressIn && (
        <>
          <Text style={[LargeTextStyle, styles.text]}>Results</Text>
          <FlatList
            data={userSearch}
            renderItem={({item, index}) => (
              <RenderSearch
                index={index}
                item={item}
                styles={styling}
                handleSearchInteraction={handleSearchInteraction}
              />
            )}
            keyExtractor={item => item?.id?.toString()}
          />
        </>
      )}
      {!pressIn && (
        <>
          <Text style={[LargeTextStyle, styles.text]}>Latest search</Text>
          <FlatList
            data={searchHistory.reverse()}
            renderItem={({item, index}) => (
              <RenderSearchHistory
                index={index}
                item={item}
                handleRemoveHistoryItemPress={handleRemoveHistoryItemPress}
                styles={styling}
                handleHistoryItemPress={handleHistoryItemPress}
                search={search}
              />
            )}
            keyExtractor={item => item?.id?.toString()}
          />
        </>
      )}
    </View>
    <View style={styles.popularProductsContainer}>
      <Text style={[LargeTextStyle, styles.text, {width: wp('90%')}]}>
        Popular Product
      </Text>
      {renderPopularProduct()}
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: white,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchHistoryContainer: {
    flex: 1,
  },
  popularProductsContainer: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    marginHorizontal: '5%',
  },
});
export default SearchScreen;
