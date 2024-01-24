import React from 'react';
import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
import useModal from '../../hooks/useModal';

function Card3({item}) {
  const {setWatch} = useModal();

  return (
    <View>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => setWatch(true)}
        activeOpacity={1}>
        <Image
          source={{
            uri: item?.snippet?.thumbnails?.high?.url || './no-thumbnail.jpg',
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
          <Text style={{color: 'white'}}>
            {item?.snippet?.title?.length > 50
              ? item?.snippet?.title.slice(0, 80) + '...'
              : item?.snippet?.title}
          </Text>
          <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>
            {dayjs(item?.snippet?.publishTime.slice(0, 10)).format(
              'MMM D, YYYY',
            )}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Card3;
