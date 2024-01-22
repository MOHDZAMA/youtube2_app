import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home';
import Watch from './src/screens/Watch';

import Setting from './src/screens/Setting';
import Library from './src/screens/Library';
import {ModalProvider} from './src/context/Contex';
import useModal from './src/hooks/useModal';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ModalContext} from './src/context/Contex';

function App() {
  const Tab = createBottomTabNavigator();
  // const watch = useContext(ModalContext);

  return (
    <ModalProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Setting" component={Setting} />
          <Tab.Screen name="Library" component={Library} />
        </Tab.Navigator>
        <Watch />
      </NavigationContainer>
    </ModalProvider>
  );
}

export default App;
