import React, {useState} from 'react';
import {Image, TextInput, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Search from '../search/Search';
import Playlist from '../playlist/Playlist';
import Channel from '../channel/Channel';
import Feed from '../feed/Feed';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

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
            <Icon
              size={20}
              color="white"
              name="search-outline"
              onPress={() =>
                navigation.navigate('Search', {query: search})
              }></Icon>
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
                gap: 5,
              }}>
              <Icon
                size={20}
                color="white"
                name="arrow-back"
                onPress={() => {
                  navigation.goBack(), setSearch('');
                }}></Icon>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  color: 'white',
                  width: 250,
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
                  // autoFocus={true}
                  // focusable={true}
                  placeholderTextColor="white"
                  placeholder="Search"
                  onChangeText={text => setSearch(text)}
                  value={search}
                  onSubmitEditing={() =>
                    navigation.navigate('Search', {query: search})
                  }
                  clearButtonMode="always"></TextInput>
                <Icons
                  size={20}
                  color="gray"
                  name="cross"
                  onPress={() => setSearch('')}></Icons>
              </View>
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
            <Icon
              size={20}
              color="white"
              name="search-outline"
              onPress={() =>
                navigation.navigate('Search', {query: search})
              }></Icon>
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
            <Icon
              size={20}
              color="white"
              name="search-outline"
              onPress={() =>
                navigation.navigate('Search', {query: search})
              }></Icon>
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
