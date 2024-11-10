import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {LeftArrow, Remove, ShoppingCart} from '../Assets/SVGIcons';
import {colors, iconPadding, LargeTextStyle} from '../Assets/Styles';
import {ShoppingCartLength} from './index';
import {useCartItems} from '../hooks';

const {black, white} = colors;

const Header = ({
  screenName = '',
  hideRightIcon,
  iconName,
  handleBackPress,
  handleShoppingCartPress,
  handleRemoveAllCartItems,
  animationStyle,
}) => {
  const {cartItems} = useCartItems();
  const switchRightIcon = {
    'Shopping Cart': renderShoppingCartButton,
    true: View,
  };
  const ActiveRightIcon =
    switchRightIcon[iconName || hideRightIcon] || renderRemoveButton;

  function renderShoppingCartButton() {
    return (
      <TouchableOpacity onPress={handleShoppingCartPress} style={iconPadding}>
        <ShoppingCart height={hp('4%')} width={wp('7%')} color={black} />
        <ShoppingCartLength
          cartItemsLength={cartItems?.length}
          animationStyle={animationStyle}
        />
      </TouchableOpacity>
    );
  }
  function renderRemoveButton() {
    return (
      <TouchableOpacity onPress={handleRemoveAllCartItems}>
        <Remove height={hp('3%')} width={wp('7%')} color={black} />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.leftIconContainer}
        onPress={handleBackPress}>
        <LeftArrow height={hp('3%')} width={wp('6%')} />
      </TouchableOpacity>
      <Text
        style={{
          ...LargeTextStyle,
          ...styles.text,
          right: hideRightIcon ? 11 : 0,
        }}>
        {screenName}
      </Text>
      <ActiveRightIcon />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('7%'),
    width: wp('100%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: white,
    paddingHorizontal: 12,
    marginTop: StatusBar.currentHeight,
  },
  leftIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '2%',
    ...iconPadding,
  },
  text: {
    color: black,
  },
});

export default Header;
