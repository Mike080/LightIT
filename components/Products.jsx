import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/getProducts';
import Product from '../components/Product';

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product product={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    display: 'flex',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
