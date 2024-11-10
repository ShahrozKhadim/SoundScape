import React, {memo, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {HomeScreen} from '../Screens';
import {categoryList} from '../Utils/Data';
import {ROUTES} from '../Navigation/Routes';
import {RenderCategoryList} from '../Components';
import {TYPES} from '../Store/TYPES';
import {useAuth, useProducts} from '../hooks';

const {FETCH_PRODUCTS_REQUEST} = TYPES;
const {PRODUCT_DETAIL, EXPLORE_PRODUCTS, PROFILE, SEARCH} = ROUTES;
const paginationInitialState = {
  categoriesProducts: 10,
  featuredProducts: 10,
};
const HomeContainer = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {user, isLoading: loading} = useAuth();
  const {products, isLoading} = useProducts();
  const userName = user?.name?.split(' ')[0] || 'User';
  const avatar = {uri: user?.photo};
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [pagination, setPagination] = useState(paginationInitialState);

  // Variables start here
  let filteredProducts = products;
  if (selectedCategory !== 'All') {
    filteredProducts = products.filter(item =>
      item?.category?.toLowerCase().includes(selectedCategory?.toLowerCase()),
    );
  }
  const paginatedCategoriesProducts = filteredProducts.slice(
    0,
    pagination.categoriesProducts,
  );
  let isCategoriesProductsLoading =
    filteredProducts.length >= pagination.categoriesProducts;
  const paginatedFeaturedProducts = products.slice(
    0,
    pagination.featuredProducts,
  );
  let isFeaturedProductsLoading =
    products.length >= pagination.featuredProducts;
  let isProductRequireLoading = {
    categoriesProduct: isCategoriesProductsLoading,
    featuredProduct: isFeaturedProductsLoading,
  };
  // Variables end here

  useEffect(() => {
    dispatch({type: FETCH_PRODUCTS_REQUEST});
    return setPagination(paginationInitialState);
  }, []);

  const handleItemClick = item => {
    setSelectedCategory(item);
    setPagination({
      categoriesProducts: 10,
      featuredProducts: pagination.featuredProducts,
    });
  };
  //Navigation starts here
  const handleShopNowPress = item =>
    navigate(PRODUCT_DETAIL, {params: {product: item}});
  const handleProductPress = item =>
    navigate(PRODUCT_DETAIL, {params: {product: item}});
  const handleFeatureProductPress = featuredProducts =>
    navigate(EXPLORE_PRODUCTS, {
      params: {userSearch: products},
    });
  const handleProfilePress = () => navigate(PROFILE);
  const handleSearchPress = () => navigate(SEARCH);
  //Navigation ends here
  const onEndReachedCategoriesProducts = () => {
    const {categoriesProducts, featuredProducts} = pagination;

    if (isCategoriesProductsLoading) {
      setPagination({
        categoriesProducts: categoriesProducts + 10,
        featuredProducts: featuredProducts,
      });
    }
  };
  const onEndReachedFeaturedProducts = () => {
    const {categoriesProducts, featuredProducts} = pagination;

    if (isFeaturedProductsLoading) {
      setPagination({
        categoriesProducts: categoriesProducts,
        featuredProducts: featuredProducts + 10,
      });
    }
  };

  const renderCategoryList = ({item}) => (
    <RenderCategoryList
      item={item}
      handleItemClick={handleItemClick}
      selectedCategory={selectedCategory}
    />
  );
  return (
    <HomeScreen
      navigation={navigation}
      renderCategoryList={renderCategoryList}
      categoryList={categoryList}
      products={paginatedCategoriesProducts}
      featuredProducts={paginatedFeaturedProducts}
      handleProfilePress={handleProfilePress}
      user={user}
      handleSearchPress={handleSearchPress}
      handleShopNowPress={handleShopNowPress}
      handleProductPress={handleProductPress}
      handleFeatureProductPress={handleFeatureProductPress}
      isLoading={isLoading || loading}
      onEndReachedCategoriesProducts={onEndReachedCategoriesProducts}
      onEndReachedFeaturedProducts={onEndReachedFeaturedProducts}
      isProductRequireLoading={isProductRequireLoading}
      style={styles.loadingStyle}
      userName={userName}
      avatar={avatar}
    />
  );
};
const styles = StyleSheet.create({
  loadingStyle: {flex: 1, justifyContent: 'center', marginHorizontal: 5},
});
export default memo(HomeContainer);
