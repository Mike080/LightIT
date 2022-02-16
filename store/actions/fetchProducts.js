import { FETCH_PRODUCTS } from './types';

export const fetchProducts = (data) => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
};
