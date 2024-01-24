import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import dayjs from 'dayjs';
import useModal from '../../hooks/useModal';
import {useNavigation} from '@react-navigation/native';

function Card5({item}) {
  const {setWatch} = useModal();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      key={item?.id}
      activeOpacity={1}
      onPress={() => setWatch(true)}>
      <Image
        source={{
          uri: item?.snippet?.thumbnails?.medium?.url || './no-thumbnail.jpg',
        }}
        alt="no-thumbnail.jpg"
        style={{
          width: '40%',
          height: 90,
          margin: 5,
          borderRadius: 10,
        }}
      />
      <View>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          {item?.snippet?.title}
        </Text>
        <Text
          style={{color: 'rgba(255, 255, 255, 0.7)'}}
          onPress={() => navigation.navigate('Channel')}>
          {item?.snippet?.channelTitle}
        </Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>
          {dayjs(item?.snippet?.publishAt?.slice(0, 10)).format('MMM D, YYYY')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card5;
