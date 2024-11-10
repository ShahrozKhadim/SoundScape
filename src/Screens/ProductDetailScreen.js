import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, LargeTextStyle, smallTextStyle} from '../Assets/Styles';
import {AttentionModal, Header, PrimaryButton, TabHeader} from '../Components';

const {white, green} = colors;

const ProductDetailScreen = ({
  handleTabPress,
  isOverViewActive,
  isFeaturesActive,
  isSpecificationsActive,
  handleBackPress,
  product,
  handleAddToCart,
  handleShoppingCartPress,
  cartItemLength,
  animationStyle,
  modalText,
  isVisible,
  handleOkPress,
  ActiveTabView,
}) => (
  <View style={styles.scrollContainer}>
    <AttentionModal
      isVisible={isVisible}
      title={modalText.title}
      message={modalText.message}
      handleOkPress={handleOkPress}
    />
    <Header
      iconName={'Shopping Cart'}
      handleBackPress={handleBackPress}
      handleShoppingCartPress={handleShoppingCartPress}
      cartItemLength={cartItemLength}
      animationStyle={animationStyle}
    />
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={{...smallTextStyle, ...styles.headerSubHeadingText}}>
            USD {product?.price}
          </Text>
          <Text style={{...LargeTextStyle, ...styles.headerTitleText}}>
            {product?.name}
          </Text>
        </View>
        <View style={styles.overViewFeaturesAndSpecsContainer}>
          <View style={styles.tabContainer}>
            <TabHeader
              styles={styles}
              backgroundColor={isOverViewActive}
              text={'OverView'}
              onPress={() => handleTabPress('OverView')}
            />
            <TabHeader
              styles={styles}
              backgroundColor={isFeaturesActive}
              text={'Features'}
              onPress={() => handleTabPress('Features')}
            />
            <TabHeader
              styles={styles}
              backgroundColor={isSpecificationsActive}
              text={'Specifications'}
              onPress={() => handleTabPress('Specifications')}
            />
          </View>
          <ActiveTabView productFeaturesList={product?.features} />
          {/*{isOverViewActive && <OverView />}
          {isFeaturesActive && (
            <Features productFeaturesList={product?.features} />
          )}
          {isSpecificationsActive && <OverView />} */}
        </View>
      </View>
    </ScrollView>
    <View style={styles.buttonContainer}>
      <PrimaryButton
        text={'Add to Cart'}
        handleSubmit={() => handleAddToCart(product)}
      />
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerContainer: {
    flex: 1,
    width: wp('100%'),
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: '10%',
  },
  headerTitleText: {
    fontSize: hp('3.5%'),
  },
  headerSubHeadingText: {
    color: green,
  },
  overViewFeaturesAndSpecsContainer: {
    flex: 4,
    width: wp('90%'),
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  buttonContainer: {
    width: wp('100%'),
    position: 'absolute',
    alignItems: 'center',
    bottom: hp('1%'),
    backgroundColor: 'transparent',
  },
});
export default ProductDetailScreen;
