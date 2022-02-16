import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HomeStackScreen, ProfileStackScreen } from './Navigation/navigation';
import imagesPath from './constants/imagesPath';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    style={{
                      tintColor: focused ? '#0000ee' : 'gray',
                    }}
                    source={imagesPath.icHome}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    style={{
                      tintColor: focused ? '#0000ee' : 'gray',
                    }}
                    source={imagesPath.icProfile}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
