import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {nanoid} from '@reduxjs/toolkit';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {popularProduct} from '../Utils/Data';
import {colors} from '../Assets/Styles';
import {ROUTES} from '../Navigation/Routes';
import {SearchScreen} from '../Screens';
import {removeHistory} from '../Store/Actions';
import RenderPopularProducts from '../Components/RenderingComponents/RenderPopularProducts';
import {
  add_History,
  remove_History,
} from '../services/Firebase/databaseServices';
import {useCartItems} from '../hooks';

const {greyLightOne, black} = colors;
const {SHOPPING_CART, EXPLORE_PRODUCTS, PRODUCT_DETAIL} = ROUTES;

const SearchContainer = ({navigation}) => {
  const {goBack, navigate} = navigation;
  const dispatch = useDispatch();
  const {products, searchHistory, idToObjectMapping} = useSelector(
    state => state?.products,
  );
  const {cartItems} = useCartItems();
  const [search, setSearch] = useState('');
  const [pressIn, setPressIn] = useState(false);
  const [productInHistory, setProductInHistory] = useState([]);

  useEffect(() => {
    if (search.length === 0) {
      setPressIn(false);
    } else {
      setPressIn(true);
    }
    return () => setPressIn(false);
  }, [search]);
  useEffect(() => {
    extractProductsFromUserSearch();
    return () => setProductInHistory([]);
  }, [searchHistory]);

  // header top bar starts here
  const handleBackPress = () => goBack();
  const handleShoppingCartPress = () => {
    navigate(SHOPPING_CART);
  };
  // header top bar starts here

  const handleSearch = text => {
    setSearch(text);
  };
  const filterData = query => {
    const isQuery = query && query.toLowerCase();
    return products.filter(item =>
      item?.name?.toLowerCase()?.includes(isQuery || search.toLowerCase()),
    );
  };
  // Search history starts here
  const extractProductsFromUserSearch = () => {
    let productsFromHistory = [];
    for (let history = 0; history < searchHistory.length; history++) {
      for (let product = 0; product < products.length; product++) {
        if (searchHistory[history].productId === products[product].id) {
          productsFromHistory.push(products[product]);
        }
      }
    }
    setProductInHistory(productsFromHistory);
  };
  const handleHistoryItemPress = async (type, query, id) => {
    if (type === 'Search') {
      const historyItem = {
        id: nanoid(),
        type: type,
        query: query,
        timestamp: moment.now(),
      };
      await add_History(historyItem);
      // dispatch(searchHistoryAction(historyItem));
      let userQuery = await filterData(query);
      navigate(EXPLORE_PRODUCTS, {
        params: {
          userSearch: userQuery,
        },
      });
    } else {
      const historyItem = {
        id: nanoid(),
        productId: id,
        type: type,
        query: query,
        timestamp: moment.now(),
      };
      await add_History(historyItem);
      let selectedProduct = {};
      for (let product = 0; product < productInHistory.length; product++) {
        if (productInHistory[product].id === id) {
          selectedProduct = productInHistory[product];
        }
      }
      navigate(PRODUCT_DETAIL, {
        params: {
          product: selectedProduct,
        },
      });
    }
  };
  const handleRemoveHistoryItemPress = async id => {
    let getIndex = '';
    const updateHistory = searchHistory.filter((value, index) => {
      if (value.id !== id) {
        return value;
      } else {
        getIndex = index;
      }
    });
    await remove_History(idToObjectMapping[getIndex]);
    dispatch(removeHistory(updateHistory));
  };
  // Search history ends here
  // Search starts here
  const handleSearchInteraction = async (productDetails, type) => {
    const historyItem = {
      id: nanoid(),
      productId: productDetails.id,
      type: type,
      query: productDetails.name,
      timestamp: moment.now(),
    };
    await add_History(historyItem);
    // dispatch(searchHistoryAction(historyItem));
    navigate(PRODUCT_DETAIL, {
      params: {product: productDetails},
    });
  };
  const handleSubmitPress = async () => {
    if (search.length === 0) {
      return;
    }
    const historyItem = {
      id: nanoid(),
      type: 'Search',
      query: search.trim(),
      timestamp: moment.now(),
    };
    await add_History(historyItem);
    // dispatch(searchHistoryAction(historyItem));
    let userSearch = filterData();
    navigate(EXPLORE_PRODUCTS, {
      params: {
        userSearch: userSearch,
      },
    });
  };
  // Search history ends here
  const renderPopularProduct = () => {
    return popularProduct.map(item => (
      <RenderPopularProducts item={item} styles={styles} />
    ));
  };

  return (
    <SearchScreen
      userSearch={filterData()}
      renderPopularProduct={renderPopularProduct}
      handleBackPress={handleBackPress}
      handleSubmitPress={handleSubmitPress}
      handleSearch={handleSearch}
      pressIn={pressIn}
      searchHistory={searchHistory}
      handleSearchInteraction={handleSearchInteraction}
      handleHistoryItemPress={handleHistoryItemPress}
      handleRemoveHistoryItemPress={handleRemoveHistoryItemPress}
      styling={styles}
      search={search}
      handleShoppingCartPress={handleShoppingCartPress}
      cartItemLength={cartItems?.length}
    />
  );
};
const styles = StyleSheet.create({
  renderSearchHistoryContainer: {
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 5,
    marginVertical: 3,
    paddingHorizontal: 15,
  },
  renderHistoryText: {
    width: wp('70%'),
  },
  renderPopularProductContainer: {
    height: hp('10%'),
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  popularProductImageContainer: {
    height: hp('10%'),
    width: wp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: greyLightOne,
  },
  renderPopularProductDetailsContainer: {
    height: hp('10%'),
    width: wp('60%'),
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  ratingAndReviewContainer: {
    width: wp('25%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  renderPopularProductMenuOptionsContainer: {
    height: hp('10%'),
    width: wp('7%'),
    justifyContent: 'flex-end',
  },
  image: {
    height: hp('10%'),
    width: wp('25%'),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingAndReviewText: {
    fontSize: hp('1.4%'),
    color: black,
  },
});
export default SearchContainer;
