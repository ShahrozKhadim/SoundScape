import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {ShoppingCartScreen} from '../Screens';
import {RenderCartItems} from '../Components';
import {
  clearCart,
  removeCartItemAsyncAction,
} from '../Store/Actions/cartItemsActions';
import {ROUTES} from '../Navigation/Routes';
import {
  EMPTY_CART_CONFIRMATION_MESSAGE,
  MAX_STOCK_REACHED_MESSAGE,
  MIN_QUANTITY_REACHED_MESSAGE,
} from '../Constants';
import {setCartItemQuantity} from '../services/cart';
import {useCartItems} from '../hooks';

const MODAL_TEXT_INITIAL_STATE = {
  title: '',
  message: '',
  cancel: '',
  delete: '',
};
const {CHECK_OUT} = ROUTES;

const ShoppingCartContainer = ({navigation}) => {
  const {goBack, navigate} = navigation;
  const dispatch = useDispatch();
  const {cartItems} = useCartItems();
  const [isVisible, setIsVisible] = useState({isInfo: false, isDelete: false});
  const [modalText, setModalText] = useState(MODAL_TEXT_INITIAL_STATE);
  const totalPrice = cartItems
    .reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.product_quantity,
      0,
    )
    .toFixed(2);

  //Header top bar starts here
  const handleBackPress = () => goBack();
  const handleRemoveAllCartItems = () => {
    if (cartItems.length === 0) {
      return;
    }
    setModalText(EMPTY_CART_CONFIRMATION_MESSAGE);
    setIsVisible(prevState => ({...prevState, isDelete: true}));
  };
  //Header top bar ends here
  // CartItem modification starts here
  const handleCartItemIncrement = async id => {
    let indexOfItem = cartItems.findIndex(item => item.id === id);
    const isMaxQuantityReached =
      cartItems[indexOfItem].product_quantity + 1 >
      cartItems[indexOfItem].quantity;
    if (isMaxQuantityReached) {
      setModalText(MAX_STOCK_REACHED_MESSAGE);
      setIsVisible(prevState => ({...prevState, isInfo: true}));
      return;
    }
    await setCartItemQuantity(id, 1);
  };
  const handleCartItemDecrement = async id => {
    let indexOfItem = cartItems.findIndex(item => item.id === id);
    const isMinQuantityReached = cartItems[indexOfItem].product_quantity === 1;
    if (isMinQuantityReached) {
      setModalText(MIN_QUANTITY_REACHED_MESSAGE);
      setIsVisible(prevState => ({...prevState, isInfo: true}));
      return;
    }
    await setCartItemQuantity(id, -1);
  };
  const handleRemoveCartItem = id => {
    dispatch(removeCartItemAsyncAction(id));
  };
  // CartItem modification ends here
  const handleDeletePress = () => {
    dispatch(clearCart());
    setIsVisible(prevState => ({...prevState, isDelete: false}));
  };
  const handleCancelPress = () => {
    setIsVisible(prevState => ({...prevState, isDelete: false}));
  };
  const handleOkPress = () => {
    setIsVisible(prevState => ({...prevState, isInfo: false}));
  };
  const handleCheckOut = () => {
    if (cartItems.length > 0) {
      navigate(CHECK_OUT);
    }
  };

  const renderCartItems = ({item}) => (
    <RenderCartItems
      item={item}
      handleCartItemIncrement={handleCartItemIncrement}
      handleCartItemDecrement={handleCartItemDecrement}
      handleRemoveCartItem={handleRemoveCartItem}
    />
  );
  return (
    <ShoppingCartScreen
      renderCartItems={renderCartItems}
      handleBackPress={handleBackPress}
      cartItems={cartItems}
      totalPrice={totalPrice}
      handleRemoveAllCartItems={handleRemoveAllCartItems}
      modalText={modalText}
      isVisible={isVisible}
      handleCancelPress={handleCancelPress}
      handleDeletePress={handleDeletePress}
      handleOkPress={handleOkPress}
      handleCheckOut={handleCheckOut}
    />
  );
};

export default ShoppingCartContainer;
