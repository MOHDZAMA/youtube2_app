import React, {useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Search from '../Search';
import Playlist from '../playlist/Playlist';
import Channel from '../channel/Channel';
import Feed from '../feed/Feed';

function Home() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Playlist" component={Playlist} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Channel" component={Channel} />
    </Stack.Navigator>
  );
}

export default Home;
