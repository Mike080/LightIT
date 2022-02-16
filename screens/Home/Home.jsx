import React from 'react';
import { View, StyleSheet } from 'react-native';
import Products from '../../components/Products';

export default function Home({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#ccc',
  },
});
