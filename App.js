import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ModalProvider} from './src/context/Contex';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home/Home';
import Watch from './src/screens/watch/Watch';
import Setting from './src/screens/Setting';

import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Shorts from './src/screens/Shorts';

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <ModalProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarStyle: {
              height: 40,
              backgroundColor: 'rgb(20,20,20)',
              borderTopWidth: 0.2,
              borderTopColor: 'grey',
            },
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Home') {
                // iconName = focused
                // ? 'ios-information-circle'
                // : 'ios-information-circle-outline';
                return (
                  <Icon name="home-outline" size={22} color="white"></Icon>
                );
                // <Image source={require('./src/assets/home-outline.svg')} />;
              } else if (route.name === 'Shorts') {
                // iconName = focused ? 'ios-list' : 'ios-list-outline';
                return (
                  <Icon size={22} color="white" name="duplicate-outline"></Icon>
                );
              } else if (route.name === 'Setting') {
                // iconName = focused ? 'ios-list' : 'ios-list-outline';
                return (
                  <Icon size={22} color="white" name="settings-outline"></Icon>
                );
              }

              // You can return any component that you like here!
              // return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'gray',
            tabBarInactiveTintColor: 'white',
            tabBarLabelStyle: {
              fontSize: 11,
            },
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen name="Shorts" component={Shorts} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
        <Watch />
      </NavigationContainer>
    </ModalProvider>
  );
}

export default App;
