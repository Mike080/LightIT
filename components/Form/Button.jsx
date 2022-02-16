import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function Button({ onPress, text }) {
  return (
    <View>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: '#fff',
  },
});
