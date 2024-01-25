import React, {useState, useRef, useEffect} from 'react';
import {
  Modal,
  Text,
  View,
  PanResponder,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';
import Comment from './Comment';
import {useNavigation} from '@react-navigation/native';
import useModal from '../../hooks/useModal';
import Card2 from './Card2';
// import {suggestedData} from '../../data/suggested';
// import {videodetailsData as data} from '../../data/videodetails';
import YoutubePlayer from 'react-native-youtube-iframe';
import useFetch from '../../hooks/useFetch';

function Watch() {
  const {watch, setWatch, videoId} = useModal();
  const navigation = useNavigation();

  const [paramData, setParamData] = useState({
    relatedToVideoId: videoId,
    part: 'id,snippet',
    type: 'video',
    maxResults: '50',
  });

  const [paramData2, setParamData2] = useState({
    part: 'contentDetails,snippet,statistics',
    id: videoId,
  });

  const {data: suggestedData} = useFetch('/search', paramData);
  const {data, loading, error} = useFetch('/videos', paramData2);

  useEffect(() => {
    setParamData2({
      part: 'contentDetails,snippet,statistics',
      id: videoId,
    });
    setParamData({
      relatedToVideoId: videoId,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50',
    });
  }, [videoId]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 0) {
          setWatch(false);
        }
      },
    }),
  ).current;

  const handleChannelClick = e => {
    e.stopPropagation();
    setWatch(false);
    navigation.navigate('Channel', {
      id: data.items[0].snippet.channelId,
    });
  };

  if (data !== null && suggestedData !== null) {
    const {snippet, statistics} = data.items[0];

    return (
      <Modal visible={watch} animationType="fade">
        <View style={{backgroundColor: 'rgba(0,0,0,0.85)'}}>
          <View {...panResponder.panHandlers}>
            <YoutubePlayer height={230} videoId={videoId} />
          </View>

          <Text style={styles.text}>{snippet?.title}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 10, color: 'rgba(255, 255, 255, 0.6)'}}>
              {statistics?.viewCount || 0}
            </Text>
            <Text style={{marginLeft: 10, color: 'rgba(255, 255, 255, 0.6)'}}>
              {dayjs(snippet?.publishTime?.slice(0, 10)).format('MMM D, YYYY')}
            </Text>
            {/* <Text>{snippet?.description?.slice(0, 300) + '...'}</Text> */}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 5,
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../../assets/channel1.jpg')}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 50,
                }}
                alt="channel"
              />
              <Text style={styles.text} onPress={handleChannelClick}>
                {snippet?.channelTitle}
              </Text>
              <Text style={styles.text}>1.49M</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Subscribe</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              margin: 5,
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>{statistics?.likeCount || 0}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>dislike</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>:</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              margin: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: 5,
              borderRadius: 10,
            }}>
            <Text>{'Comments ' + statistics?.commentCount}</Text>
            <Comment />
          </View>
          <ScrollView>
            {suggestedData?.items?.map(item => {
              return (
                <Card2
                  item={item}
                  key={item.id.videoId || item.id.playlistId}
                />
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 80,
    height: 30,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default Watch;
