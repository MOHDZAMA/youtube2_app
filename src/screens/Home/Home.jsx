import React, {useState} from 'react';
import {Image, TextInput, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Search from '../search/Search';
import Playlist from '../playlist/Playlist';
import Channel from '../channel/Channel';
import Feed from '../feed/Feed';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';

function Home() {
  const Stack = createNativeStackNavigator();

  function LogoTitle() {
    return (
      <Image
        style={{width: 75, height: 30}}
        source={require('../../assets/youtubepng.png')}
      />
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShadowVisible: false,
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Icon size={20} color="white" name="search-outline"></Icon>
          ),
          headerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => (
            // <Icon size={20} color="white" name="search-outline"></Icon>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                color: 'white',
                width: 210,
                height: 30,
                borderColor: 'white',
                padding: 5,
                paddingLeft: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: 15,
                borderWidth: 0.3,
              }}>
              <TextInput
                style={{
                  width: '90%',
                  padding: 0,
                  color: 'white',
                }}
                placeholderTextColor="white"
                placeholder="Search"></TextInput>
              <Icons size={20} color="gray" name="cross"></Icons>
            </View>
          ),
          headerRight: () => (
            <Icons
              style={{marginRight: -5}}
              size={20}
              color="gray"
              name="dots-three-vertical"></Icons>
          ),
          headerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      />

      <Stack.Screen
        name="Playlist"
        component={Playlist}
        options={{
          headerShadowVisible: false,
          headerTitle: '',
          headerTintColor: 'gray',

          headerRight: () => (
            <Icon size={20} color="white" name="search-outline"></Icon>
          ),

          headerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      />

      <Stack.Screen
        name="Channel"
        component={Channel}
        options={{
          headerShadowVisible: false,
          // headerTitle: props => <LogoTitle {...props} />,
          headerTintColor: 'gray',

          headerRight: () => (
            <Icon size={20} color="white" name="search-outline"></Icon>
          ),

          headerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Home;
