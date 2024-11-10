import {TYPES} from '../TYPES';

const {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_HISTORY,
  REMOVE_HISTORY,
  CLEAR_PRODUCTS,
} = TYPES;
const initialState = {
  products: [],
  error: '',
  isLoading: false,
  searchHistory: [],
  idToObjectMapping: [],
};

/**
 * Reducer to handle product-related state, including fetching products,
 * managing search history, and clearing product data.
 *
 * @param {Object} state - Current state of the product information.
 * @param {Object} action - Action dispatched to modify the product state.
 * @returns {Object} - New state after applying the action.
 */
const productsReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        error: '',
        isLoading: false,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        error: payload,
        isLoading: false,
      };
    case SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: [...payload.searchHistory],
        idToObjectMapping: [...payload.idToObjectMapping],
      };
    case REMOVE_HISTORY:
      return {
        ...state,
        searchHistory: payload,
      };
    case CLEAR_PRODUCTS:
      return {
        products: [],
        error: '',
        isLoading: false,
        searchHistory: [],
        idToObjectMapping: [],
      };
    default:
      return state;
  }
};

export default productsReducer;
