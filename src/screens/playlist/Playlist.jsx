import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Card5 from './Card5';

import {playlistdetailsData} from '../../data/playlistdetails';
import {playlistvideosData} from '../../data/playlistvideos';

function Playlist() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
      }}>
      <View style={{width: '95%'}}>
        <Image
          source={{
            uri: playlistdetailsData?.items?.[0]?.snippet?.thumbnails?.high
              ?.url,
          }}
          alt="no-thumbnail.jpg"
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 5,
          }}
        />

        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          {playlistdetailsData?.items?.[0]?.snippet?.title}
        </Text>
        <Text style={{color: 'white'}}>
          {playlistdetailsData?.items?.[0]?.snippet?.channelTitle}
        </Text>

        <ScrollView>
          {playlistvideosData?.items?.map(item => {
            return <Card5 item={item} key={item.id.videoId} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default Playlist;
