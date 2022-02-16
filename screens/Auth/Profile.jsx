import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Sign Up')}
      >
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Sign In');
        }}
      >
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    marginVertical: 10,
  },
  text: { color: '#0000ee', fontSize: 18 },
});
