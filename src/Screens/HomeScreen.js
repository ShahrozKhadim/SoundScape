import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {authStyles, colors, smallTextStyle} from '../Assets/Styles';
import {
  CustomSearchBar,
  LoadingIndicator,
  RenderAllProducts,
  RenderProductItem,
  FooterLoadingIndicator,
  RenderEmptyAllProducts,
  RenderEmptyProductItem,
  HomeHeader,
} from '../Components';

const {greyDark, white, greyLightOne} = colors;
const {statusBarContent} = authStyles;
const viewAbilityConfig = {
  viewAreaCoveragePercentThreshold: 95,
  itemVisiblePercentThreshold: 95,
  waitForInteraction: false,
};

const HomeScreen = ({
  navigation,
  renderCategoryList,
  categoryList,
  products,
  featuredProducts,
  handleProfilePress,
  user,
  handleSearchPress,
  handleShopNowPress,
  handleProductPress,
  handleFeatureProductPress,
  isLoading,
  onEndReachedCategoriesProducts,
  onEndReachedFeaturedProducts,
  isProductRequireLoading,
  style,
  userName = '',
  avatar,
}) => (
  <View style={{...styles.container, ...statusBarContent}}>
    <LoadingIndicator isVisible={isLoading} />
    <View style={styles.headerContainer}>
      <HomeHeader
        navigation={navigation}
        handleProfilePress={handleProfilePress}
        avatar={avatar}
      />
      <View style={styles.headerIntroContainer}>
        <Text style={{...smallTextStyle, ...styles.text}}>Hi, {userName}</Text>
        <Text
          style={{
            ...smallTextStyle,
            ...styles.text,
            ...styles.headerIntroDescriptionText,
          }}>
          What are you looking for today?
        </Text>
      </View>
      <TouchableOpacity onPress={handleSearchPress}>
        <CustomSearchBar editable={false} />
      </TouchableOpacity>
    </View>
    <View style={styles.productsContainer}>
      <FlatList
        data={categoryList}
        style={styles.categoryList}
        renderItem={renderCategoryList}
        keyExtractor={item => item}
        horizontal={true}
      />
      <FlatList
        data={products}
        renderItem={({item}) => (
          <RenderProductItem
            item={item}
            handleShopNowPress={handleShopNowPress}
          />
        )}
        keyExtractor={item => item?.id}
        horizontal={true}
        initialNumToRender={10}
        onEndReached={onEndReachedCategoriesProducts}
        ListFooterComponent={
          <FooterLoadingIndicator
            isLoading={isProductRequireLoading?.categoriesProduct}
            style={style}
          />
        }
        viewabilityConfig={viewAbilityConfig}
        ListEmptyComponent={<RenderEmptyProductItem />}
      />
      <View style={styles.expandAllProducts}>
        <Text style={smallTextStyle}>Featured Products</Text>
        <TouchableOpacity onPress={() => handleFeatureProductPress(products)}>
          <Text style={{...smallTextStyle, color: greyDark}}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={featuredProducts}
        renderItem={({item}) => (
          <RenderAllProducts
            item={item}
            handleProductPress={handleProductPress}
          />
        )}
        keyExtractor={item => item?.id}
        horizontal={true}
        initialNumToRender={10}
        onEndReached={onEndReachedFeaturedProducts}
        ListFooterComponent={
          <FooterLoadingIndicator
            isLoading={isProductRequireLoading?.featuredProduct}
            style={style}
          />
        }
        viewabilityConfig={viewAbilityConfig}
        ListEmptyComponent={<RenderEmptyAllProducts />}
      />
    </View>
    <StatusBar
      backgroundColor="transparent"
      barStyle="dark-content"
      translucent
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  text: {
    fontSize: hp('2.3%'),
    fontWeight: '400',
    lineHeight: 32,
    letterSpacing: 0.2,
  },
  headerContainer: {
    flex: 1,
    width: wp('100%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingTop: '3%',
    paddingBottom: '5%',
  },
  headerIntroContainer: {
    width: wp('100%'),
    paddingHorizontal: '6%',
  },
  headerIntroDescriptionText: {
    fontWeight: '700',
    fontSize: hp('3.1%'),
  },
  productsContainer: {
    flex: 2,
    width: wp('100%'),
    alignItems: 'center',
    borderRadius: hp('4%'),
    backgroundColor: greyLightOne,
    paddingVertical: '2%',
  },
  expandAllProducts: {
    height: hp('3%'),
    width: wp('90%'),
    marginVertical: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryList: {
    width: wp('90%'),
  },
});

export default HomeScreen;
