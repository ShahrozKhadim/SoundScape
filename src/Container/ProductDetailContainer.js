import React, {memo, useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';

import {ProductDetailScreen} from '../Screens';
import {colors} from '../Assets/Styles';
import {handleAddToCartPress} from '../Store/Actions/cartItemsActions';
import {ROUTES} from '../Navigation/Routes';
import {handleCartItemLengthAnimation} from '../Utils';
import {DUPLICATION_ITEM_MESSAGE} from '../Constants';
import {Features, OverView} from '../Components';
import {useCartItems, useProducts} from '../hooks';

const MODAL_TEXT_INITIAL_STATE = {
  title: '',
  message: '',
};
const TabViews = {
  OverView: OverView,
  Features: Features,
  Specifications: OverView,
};
const {green} = colors;
const {SHOPPING_CART} = ROUTES;

const ProductDetailContainer = ({route, navigation}) => {
  const {goBack, navigate} = navigation;
  const dispatch = useDispatch();
  const productDetails = route?.params?.params?.product;
  const productId = route?.params?.id;
  const animationRef = useRef(new Animated.Value(1)).current;
  const {products} = useProducts();
  const {cartItems} = useCartItems();
  const [displayTab, setDisplayTab] = useState('OverView');
  const [product, setProduct] = useState(productDetails);
  const [isVisible, setIsVisible] = useState(false);
  const [modalText, setModalText] = useState(MODAL_TEXT_INITIAL_STATE);
  const isOverViewActive = displayTab === 'OverView' ? green : null;
  const isFeaturesActive = displayTab === 'Features' ? green : null;
  const isSpecificationsActive = displayTab === 'Specifications' ? green : null;
  const animationStyle = {
    transform: [
      {
        scale: animationRef,
      },
    ],
  };
  const ActiveTabView = TabViews[displayTab];

  useEffect(() => {
    products.filter(element => {
      if (element.id === productId) {
        setProduct(element);
      }
    });
    return () => setProduct({});
  }, []);
  useEffect(() => {
    handleCartItemLengthAnimation(animationRef);
  }, [cartItems]);

  // Header bar starts here
  const handleBackPress = () => goBack();
  const handleShoppingCartPress = () => navigate(SHOPPING_CART);
  // Header bar ends here

  const handleTabPress = tabName => {
    setDisplayTab(tabName);
  };

  const handleAddToCart = selectedProduct => {
    const isExist = cartItems.find(item => item.id === selectedProduct.id);
    if (isExist) {
      setModalText(DUPLICATION_ITEM_MESSAGE);
      setIsVisible(true);
      return;
    }
    dispatch(handleAddToCartPress(selectedProduct));
  };
  const handleOkPress = () => {
    setIsVisible(false);
    setModalText({title: '', message: ''});
  };
  return (
    <ProductDetailScreen
      handleTabPress={handleTabPress}
      isOverViewActive={isOverViewActive}
      isFeaturesActive={isFeaturesActive}
      isSpecificationsActive={isSpecificationsActive}
      handleBackPress={handleBackPress}
      product={product}
      handleAddToCart={handleAddToCart}
      handleShoppingCartPress={handleShoppingCartPress}
      cartItemLength={cartItems?.length}
      animationStyle={animationStyle}
      modalText={modalText}
      isVisible={isVisible}
      handleOkPress={handleOkPress}
      displayTab={displayTab}
      ActiveTabView={ActiveTabView}
    />
  );
};

export default memo(ProductDetailContainer);
