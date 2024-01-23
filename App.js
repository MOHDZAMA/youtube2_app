import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ModalProvider} from './src/context/Contex';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home/Home';
import Watch from './src/screens/watch/Watch';
import Setting from './src/screens/Setting';
import Library from './src/screens/Library';

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <ModalProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen name="Setting" component={Setting} />
          <Tab.Screen name="Library" component={Library} />
        </Tab.Navigator>
        <Watch />
      </NavigationContainer>
    </ModalProvider>
  );
}

export default App;
