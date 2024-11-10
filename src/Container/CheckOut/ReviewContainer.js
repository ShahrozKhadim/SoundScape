import React, {forwardRef, useEffect, useRef, useState} from 'react';

import {ReviewScreen} from '../../Screens';
import {RenderCartItems} from '../../Components';
import {removeCartItemAsyncAction} from '../../Store/Actions/cartItemsActions';
import {useDispatch} from 'react-redux';
import {setCartItemQuantity} from '../../services/cart';
import {useCartItems} from '../../hooks';

const ReviewContainer = () => {
  const dispatch = useDispatch();
  const refRBSheet = useRef(null);
  const {cartItems} = useCartItems();
  const [isVisible, setIsVisible] = useState({isInfo: false, isDelete: false});
  const [modalText, setModalText] = useState({
    title: '',
    message: '',
    cancel: '',
    delete: '',
  });
  const totalPrice = cartItems
    .reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.product_quantity,
      0,
    )
    .toFixed(1);
  let subTotal = Number(totalPrice) + 10.0;
  useEffect(() => {
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  }, []);

  // CartItem modification starts here
  const handleCartItemIncrement = async id => {
    const indexOfItem = cartItems.findIndex(item => item.id === id);
    const isQuantityExceeded =
      cartItems[indexOfItem].product_quantity + 1 >
      cartItems[indexOfItem].quantity;
    if (isQuantityExceeded) {
      setModalText({
        title: 'Maximum Stock Reached',
        message:
          "Hey there! We've hit the maximum stock limit for this item. You can't add more to your cart at the moment. Feel free to review your cart or explore other great products!",
      });
      setIsVisible({isInfo: true});
      return;
    }
    await setCartItemQuantity(id, 1);
  };
  const handleCartItemDecrement = async id => {
    let indexOfItem = cartItems.findIndex(item => item.id === id);
    const checkedQuantity = cartItems[indexOfItem].product_quantity === 1;
    if (checkedQuantity) {
      setModalText({
        title: 'Minimum Quantity Reached',
        message: "Can't go below one. You can remove it if needed.",
      });
      setIsVisible(prevState => ({...prevState, isInfo: true}));
      return;
    }
    await setCartItemQuantity(id, -1);
  };
  const handleRemoveCartItem = id => {
    dispatch(removeCartItemAsyncAction(id));
  };
  // CartItem modification ends here

  const renderCartItems = ({item}) => (
    <RenderCartItems
      item={item}
      handleCartItemIncrement={handleCartItemIncrement}
      handleCartItemDecrement={handleCartItemDecrement}
      handleRemoveCartItem={handleRemoveCartItem}
    />
  );

  return (
    <ReviewScreen
      refRBSheet={refRBSheet}
      cartItems={cartItems}
      renderCartItems={renderCartItems}
      totalPrice={totalPrice}
      subTotal={subTotal}
    />
  );
};

export default forwardRef(ReviewContainer);
