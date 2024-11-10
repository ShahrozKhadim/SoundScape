import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {colors, LargeTextStyle, smallTextStyle} from '../Assets/Styles';
import {
  DeleteModal,
  RightIconButton,
  SuccessModal,
  Header,
} from '../Components';

const {white} = colors;

const ShoppingCartScreen = ({
  renderCartItems,
  handleBackPress,
  cartItems,
  totalPrice,
  handleRemoveAllCartItems,
  modalText,
  isVisible,
  handleCancelPress,
  handleDeletePress,
  handleOkPress,
  handleCheckOut,
}) => (
  <View style={styles.container}>
    <Header
      screenName={'Shopping Cart'}
      handleBackPress={handleBackPress}
      handleRemoveAllCartItems={handleRemoveAllCartItems}
    />
    <View style={styles.shoppingItemContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItems}
        keyExtractor={item => item?.id?.toString()}
      />
    </View>
    <View style={styles.checkOutContainer}>
      <View style={styles.itemPriceContainer}>
        <Text style={smallTextStyle}>Total {cartItems.length} items</Text>
        <Text style={LargeTextStyle}>${totalPrice}</Text>
      </View>
      <RightIconButton onPress={handleCheckOut} text={'Proceed to Checkout'} />
    </View>
    <SuccessModal
      isVisible={isVisible.isInfo}
      title={modalText.title}
      message={modalText.message}
      handleOkPress={handleOkPress}
    />
    <DeleteModal
      isVisible={isVisible.isDelete}
      title={modalText.title}
      message={modalText.message}
      cancelText={modalText.cancel}
      deleteText={modalText.delete}
      handleDeletePress={handleDeletePress}
      handleCancelPress={handleCancelPress}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  shoppingItemContainer: {
    flex: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  checkOutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemPriceContainer: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
});
export default ShoppingCartScreen;
