import React, {useEffect, useRef, useState} from 'react';
import {Share, Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import moment from 'moment';

import {ExploreProductsScreen} from '../Screens';
import {ROUTES} from '../Navigation/Routes';
import {
  RenderAllProductsOfExploreProducts,
  RenderCategoryOptionsOfExploreProducts,
} from '../Components';
import {handleAddToCartPress} from '../Store/Actions/cartItemsActions';
import {handleCartItemLengthAnimation} from '../Utils';
import {sorterList} from '../Utils/helpers';
import {
  addSharedProductToDatabase,
  createDynamicLink,
} from '../services/Firebase/dynamicLinksService';
import {useCartItems, useProducts} from '../hooks';
import {DUPLICATION_ITEM_MESSAGE} from '../Constants';

const {share, sharedAction, dismissedAction} = Share;
const {SHOPPING_CART, PRODUCT_DETAIL} = ROUTES;
const filterInitialState = {
  category: 'All',
  sortBy: 'Popularity',
  priceRange: {
    minimum: '',
    maximum: '',
  },
};
const modalTextInitialState = {
  title: '',
  message: '',
};

const ExploreProductsContainer = ({route, navigation}) => {
  const {goBack, navigate} = navigation;
  const userSearch = route?.params?.params?.userSearch;
  const isLink = route?.params?.link;
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  const animationRef = useRef(new Animated.Value(1)).current;
  const {products: productsList} = useProducts();
  const {cartItems} = useCartItems();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState(userSearch);
  const [productMenu, setProductMenu] = useState({});
  const [filter, setFilter] = useState(filterInitialState);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [pagination, setPagination] = useState(10);
  const [menuPosition, setMenuPosition] = useState({top: 0, left: 0});
  const [isVisible, setIsVisible] = useState(false);
  const [modalText, setModalText] = useState(modalTextInitialState);
  const animationStyle = {
    transform: [
      {
        scale: animationRef,
      },
    ],
  };
  const paginatedProduct = products.slice(0, pagination);
  let isLoading = products.length >= pagination;

  useEffect(() => {
    if (isLink) {
      setProducts(productsList);
    }
    return setPagination(10);
  }, []);

  useEffect(() => {
    handleCartItemLengthAnimation(animationRef);
  }, [cartItems]);

  //Header starts here
  const handleBackPress = () => goBack();

  const handleShoppingCartPress = () => navigate(SHOPPING_CART);
  //Header ends here

  //Toggle Menu starts here
  const toggleMenu = (pageX, pageY) => {
    if (pageY >= 610 && pageX >= 250) {
      setMenuPosition({top: pageY - 100, left: pageX - 120});
    } else if (pageX >= 250) {
      setMenuPosition({top: pageY - 50, left: pageX - 100});
    } else if (pageY >= 610) {
      setMenuPosition({top: pageY - 100, left: pageX - 20});
    } else {
      setMenuPosition({top: pageY - 50, left: pageX - 20});
    }
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuPress = (item, e) => {
    const {pageX, pageY} = e?.nativeEvent;
    toggleMenu(pageX, pageY);
    setProductMenu(item);
  };

  /**
   * Handles adding a product to the cart and manages the visibility of the product menu.
   *
   * @returns {void} Does not return a value, but performs side effects like updating the UI and state.
   *
   */
  const handleAddToCartAndMenuVisibility = () => {
    const isExist = cartItems.find(item => item.id === productMenu.id);
    if (isExist) {
      setModalText(DUPLICATION_ITEM_MESSAGE);
      setIsVisible(true);
      setIsMenuVisible(false);
      return;
    }
    setIsMenuVisible(false);
    dispatch(handleAddToCartPress(productMenu));
  };

  /**
   * Handles the sharing of product details and manages menu visibility.
   *
   * @returns {Promise<void>} Resolves when the sharing process completes, including handling any errors.
   *
   */
  const handleSharePressAndMenuVisibility = async () => {
    const {name, id, price} = productMenu;
    let link = createDynamicLink(id);
    const content = {message: `${name} $${price}\n${link}`};

    await share(content)
      .then(async result => onShareOpen(result, link))
      .catch(onShareError)
      .finally(() => setIsMenuVisible(false));
  };

  /**
   * Handles the outcome of a product sharing action.
   *
   * @param {Object} result - The result object from the share action, containing the action type.
   * @param {string} link - The dynamically generated link to the shared product.
   * @returns {Promise<void>} Resolves after the share outcome is processed.
   *
   */
  async function onShareOpen(result, link) {
    const {action} = result;
    if (action === sharedAction) {
      const sharedProduct = {
        shared_at: moment.now(),
        product_link: link,
      };
      await addSharedProductToDatabase(sharedProduct);
    } else if (action === dismissedAction) {
      /*Works on iOS*/
      console.log('dismissing share');
    }
  }
  function onShareError(error) {
    console.log('share error: ', {error});
  }

  const handleIsVisible = () => setIsMenuVisible(false);
  //Toggle Menu ends here

  const handleCategoryOptionsPress = item => setSelectedCategory(item);
  const handleProductPress = product =>
    navigate(PRODUCT_DETAIL, {
      params: {
        product: product,
      },
    });

  //Filtering starts here
  const handleFilterPress = () => refRBSheet?.current?.open();
  const handleCloseRBSheetPress = () => refRBSheet?.current?.close();

  /**
   * Filters and sorts products based on selected category, sorting method, and price range.
   *
   * This function applies filtering by category, sorting, and price range to the list of products.
   * It updates the filtered products state and closes the bottom sheet when filtering is complete.
   *
   * @param {string} category - The selected category to filter products.
   * @param {string} sortBy - The selected sorting method (e.g., "price" or "popularity").
   * @param {Array<number>} priceRange - An array with two numbers defining the minimum and maximum price range.
   * @returns {void} Does not return a value, but updates the filtered products state.
   *
   * @example
   * handleSubmit('Electronics', 'price', [100, 500]);
   */
  const handleSubmit = (category, sortBy, priceRange) => {
    let filteredProduct = isLink ? [...productsList] : [...userSearch];
    const value = {
      category: category,
      sortBy: sortBy,
      priceRange: priceRange,
    };
    setFilter(value);
    // filter by categories
    if (category === 'All') {
      filteredProduct = productsList;
    } else {
      filteredProduct = filteredProduct.filter(
        item => item.category === category,
      );
    }
    filteredProduct = sortByFilter(sortBy, filteredProduct);
    filteredProduct = filterPriceRange(priceRange, filteredProduct);
    setProducts(filteredProduct);
    refRBSheet?.current?.close();
  };

  function sortByFilter(sortBy, filteredProduct) {
    filteredProduct.sort(sorterList[sortBy]) || setProducts(userSearch);
    return filteredProduct;
  }
  function filterPriceRange(priceRange, filterItems) {
    if (Object.keys(priceRange).length !== 0) {
      const {minimum, maximum} = priceRange;
      if (minimum && maximum) {
        filterItems = filterItems.filter(
          item => item?.price >= minimum && item?.price <= maximum,
        );
      } else if (minimum) {
        filterItems = filterItems.filter(item => item.price >= minimum);
      } else if (maximum) {
        filterItems = filterItems.filter(item => item?.price <= maximum);
      }
    }
    return filterItems;
  }
  //Filtering ends here
  const onEndReached = () => {
    if (isLoading) {
      setPagination(prevState => prevState + 10);
    }
  };
  const handleOkPress = () => {
    setIsVisible(false);
    setModalText(modalTextInitialState);
  };

  //Rendering components starts here
  const renderCategoryOptions = ({item}) => (
    <RenderCategoryOptionsOfExploreProducts
      item={item}
      selectedCategory={selectedCategory}
      handleCategoryOptionsPress={handleCategoryOptionsPress}
    />
  );
  const renderAllProducts = ({item}) => (
    <RenderAllProductsOfExploreProducts
      item={item}
      handleProductPress={handleProductPress}
      handleMenuPress={handleMenuPress}
    />
  );
  //Rendering components ends here
  return (
    <ExploreProductsScreen
      renderCategoryOptions={renderCategoryOptions}
      renderAllProducts={renderAllProducts}
      refRBSheet={refRBSheet}
      handleFilterPress={handleFilterPress}
      handleSubmit={handleSubmit}
      handleCloseRBSheetPress={handleCloseRBSheetPress}
      handleBackPress={handleBackPress}
      handleShoppingCartPress={handleShoppingCartPress}
      products={paginatedProduct}
      filter={filter}
      setFilter={setFilter}
      isMenuVisible={isMenuVisible}
      handleIsVisible={handleIsVisible}
      menuPosition={menuPosition}
      productMenu={productMenu}
      dispatch={dispatch}
      handleAddToCartAndMenuVisibility={handleAddToCartAndMenuVisibility}
      handleSharePressAndMenuVisibility={handleSharePressAndMenuVisibility}
      cartItemLength={cartItems?.length}
      animationStyle={animationStyle}
      onEndReached={onEndReached}
      isLoading={isLoading}
      isVisible={isVisible}
      modalText={modalText}
      handleOkPress={handleOkPress}
    />
  );
};

export default ExploreProductsContainer;
