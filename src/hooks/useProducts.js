import {useSelector} from 'react-redux';

/**
 * Custom hook to access product data from the Redux store.
 *
 * @returns {Object} Product state:
 * @property {Array} products - List of available products.
 * @property {string} error - Error message related to product data.
 * @property {boolean} isLoading - Indicates if product data is loading.
 * @property {Array} searchHistory - List of recent search queries.
 * @property {Array} idToObjectMapping - Mapping of product IDs to product details.
 */
const useProducts = () => {
  const {
    products = [],
    error = '',
    isLoading = false,
    searchHistory = [],
    idToObjectMapping = [],
  } = useSelector(state => state.products);

  return {products, error, isLoading, searchHistory, idToObjectMapping};
};

export default useProducts;
