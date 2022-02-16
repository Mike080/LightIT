import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../../components/Form/Form';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
