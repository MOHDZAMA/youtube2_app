import React from 'react';
import {View, Text, Image} from 'react-native';

import dayjs from 'dayjs';

function Card5({item}) {
  return (
    <View style={{flexDirection: 'row'}} key={item?.id?.videoId}>
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
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>
          {item?.snippet?.channelTitle}
        </Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>
          {dayjs(item?.snippet?.publishAt?.slice(0, 10)).format('MMM D, YYYY')}
        </Text>
      </View>
    </View>
  );
}

export default Card5;
