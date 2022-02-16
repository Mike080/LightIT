import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Auth/Profile';
import SignUp from '../screens/Auth/SignUp';
import SignIn from '../screens/Auth/SignIn';

const Stack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function ProfileStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Sign In" component={SignIn} />
    </Stack.Navigator>
  );
}
