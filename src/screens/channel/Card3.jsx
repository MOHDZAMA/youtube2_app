import React from 'react';
import {View, Text, Image} from 'react-native';
import dayjs from 'dayjs';

function Card3({item}) {
  return (
    <View style={{flexDirection: 'row'}}>
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
          {dayjs(item?.snippet?.publishTime.slice(0, 10)).format('MMM D, YYYY')}
        </Text>
      </View>
    </View>
  );
}

export default Card3;
