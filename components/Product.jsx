import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function Product({ product }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.card_image}
        source={{
          uri: `http://smktesting.herokuapp.com/static/${product.img}`,
        }}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.text}>{product.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { height: 1, width: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  title: {
    backgroundColor: '#111',
    color: '#fff',
    padding: 10,
    fontSize: 24,
    fontWeight: '800',
  },
  text: {
    backgroundColor: '#111',
    color: '#fff',
    padding: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});
