import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, smallTextStyle} from '../Assets/Styles';
import {
  AttentionModal,
  FooterLoadingIndicator,
  Header,
  OverflowMenu,
} from '../Components';
import {Filter} from '../Assets/SVGIcons';
import {filterOptions} from '../Utils/Data';
import FilterRBSheet from '../Components/FilterRBSheet';

const {black, white, grey, greyLightOne} = colors;
const viewAbilityConfig = {
  viewAreaCoveragePercentThreshold: 95,
  itemVisiblePercentThreshold: 95,
  waitForInteraction: false,
};
const rbSheetCustomStyles = {
  wrapper: {
    backgroundColor: 'transparent',
  },
  container: {
    elevation: 3,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 20,
  },
};

const ExploreProductsScreen = ({
  renderCategoryOptions,
  renderAllProducts,
  refRBSheet,
  handleFilterPress,
  handleSubmit,
  handleCloseRBSheetPress,
  handleBackPress,
  handleShoppingCartPress,
  products,
  filter,
  setFilter,
  isMenuVisible,
  handleIsVisible,
  menuPosition,
  handleAddToCartAndMenuVisibility,
  handleSharePressAndMenuVisibility,
  cartItemLength,
  animationStyle,
  onEndReached,
  isLoading,
  isVisible,
  modalText,
  handleOkPress,
}) => (
  <View style={styles.container}>
    <AttentionModal
      title={modalText?.title}
      message={modalText?.message}
      isVisible={isVisible}
      handleOkPress={handleOkPress}
    />
    <OverflowMenu
      isMenuVisible={isMenuVisible}
      handleIsVisible={handleIsVisible}
      menuPosition={menuPosition}
      handleAddToCartAndMenuVisibility={handleAddToCartAndMenuVisibility}
      handleSharePressAndMenuVisibility={handleSharePressAndMenuVisibility}
    />
    <View style={styles.headerContainer}>
      <Header
        iconName={'Shopping Cart'}
        handleBackPress={handleBackPress}
        handleShoppingCartPress={handleShoppingCartPress}
        cartItemLength={cartItemLength}
        animationStyle={animationStyle}
      />
      <View style={styles.headerIntroContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.text}>HeadPhone</Text>
          <Text style={{...styles.text, ...styles.headerTitleText}}>
            TMA Wireless
          </Text>
        </View>
        <View style={styles.filterOptionsContainer}>
          <TouchableOpacity
            style={styles.filterContainer}
            onPress={handleFilterPress}>
            <Filter height={hp('3%')} width={wp('6%')} color={black} />
            <Text style={{...smallTextStyle, ...styles.filterText}}>
              Filter
            </Text>
          </TouchableOpacity>
          <FlatList
            data={filterOptions}
            renderItem={renderCategoryOptions}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            horizontal={true}
          />
        </View>
      </View>
    </View>
    <View style={styles.productsContainer}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderAllProducts}
        keyExtractor={item => item.id}
        initialNumToRender={10}
        ListFooterComponent={<FooterLoadingIndicator isLoading={isLoading} />}
        onEndReached={onEndReached}
        viewabilityConfig={viewAbilityConfig}
      />
    </View>
    <RBSheet
      ref={refRBSheet}
      animationType={'slide'}
      closeOnDragDown={false}
      closeOnPressMask={true}
      height={hp('70%')}
      customStyles={rbSheetCustomStyles}>
      <FilterRBSheet
        handleSubmit={handleSubmit}
        handleCloseRBSheetPress={handleCloseRBSheetPress}
        filter={filter}
        setFilter={setFilter}
      />
    </RBSheet>
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
    fontSize: hp('2%'),
    fontWeight: '400',
    lineHeight: 32,
    letterSpacing: 0.2,
    color: black,
  },
  headerContainer: {
    flex: 1,
    width: wp('100%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '5%',
  },
  headerIntroContainer: {
    flex: 1,
    width: wp('100%'),
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
  filterContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: grey,
    marginHorizontal: '3%',
  },
  filterText: {
    marginLeft: 10,
  },
  filterOptionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  productsContainer: {
    flex: 2,
    width: wp('100%'),
    flexWrap: 'wrap',
    paddingLeft: '2%',
    borderRadius: 30,
    backgroundColor: greyLightOne,
  },
  headerTitleContainer: {
    width: wp('90%'),
    paddingHorizontal: '6%',
  },
  headerTitleText: {
    fontWeight: '700',
    fontSize: hp('3.1%'),
  },
});

export default ExploreProductsScreen;
