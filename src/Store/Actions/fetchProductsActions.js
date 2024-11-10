import {TYPES} from '../TYPES';

const {FETCH_PRODUCTS_SUCCESS, SEARCH_HISTORY, REMOVE_HISTORY, CLEAR_PRODUCTS} =
  TYPES;

export const fetchProducts = products => {
  return async dispatch =>
    dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: products});
};

export const searchHistory = (search_History, idToObjectMapping) => ({
  type: SEARCH_HISTORY,
  payload: {
    searchHistory: search_History,
    idToObjectMapping: idToObjectMapping,
  },
});

export const removeHistory = updateHistory => ({
  type: REMOVE_HISTORY,
  payload: updateHistory,
});

export const clearProductsAndHistory = updateHistory => ({
  type: CLEAR_PRODUCTS,
});
