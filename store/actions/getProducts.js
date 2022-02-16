import axios from 'axios';
import { fetchProducts } from './fetchProducts';

export const getProducts = () => {
  return (dispatch) => {
    axios
      .get('https://smktesting.herokuapp.com/api/products/')
      .then((res) => dispatch(fetchProducts(res.data)));
  };
};
