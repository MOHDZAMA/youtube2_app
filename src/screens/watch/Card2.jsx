import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import useModal from '../../hooks/useModal';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';

function Card2({item}) {
  const {setWatch} = useModal();
  const navigate = useNavigation();

  const handleChannelClick = e => {
    e.stopPropagation();
    navigate.navigate('Channel');
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={1} onPress={() => setWatch(true)}>
        <Image
          source={
            item?.snippet?.thumbnails?.medium?.url
              ? {uri: item.snippet.thumbnails.medium.url}
              : require('../../assets/thumbnail.png')
          }
          style={styles.card_t_img}
        />
        <View style={styles.card_b}>
          <Image
            source={require('../../assets/youtube.svg')}
            style={styles.titleimg}
          />
          <View>
            <Text style={styles.text}>
              {item?.snippet?.title?.length > 80
                ? item.snippet.title.slice(0, 80) + '...'
                : item?.snippet?.title}
            </Text>
            <View style={styles.card_b_b}>
              <Text onPress={handleChannelClick}>
                {item?.snippet?.channelTitle}
              </Text>
              <Text>
                {dayjs(item?.snippet?.publishTime?.slice(0, 10)).format(
                  'MMM D, YYYY',
                )}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 270,
    width: '100%',
  },
  card_t_img: {
    height: 200,
    width: '100%',
    marginBottom: 5,
  },
  card_b: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_b_b: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  titleimg: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 5,
    objectFit: 'cover',
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
export default Card2;
