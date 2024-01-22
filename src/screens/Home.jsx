import React, {useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Search from './Search';
import Playlist from './Playlist';
import Channel from './Channel';
import Feed from './feed/Feed';

function Home() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Playlist" component={Playlist} />
      <Stack.Screen name="Channel" component={Channel} />
    </Stack.Navigator>
  );
}

export default Home;
