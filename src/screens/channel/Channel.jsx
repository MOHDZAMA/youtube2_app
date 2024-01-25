import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import useFetch from '../../hooks/useFetch';

// import {channeldetailData} from '../../data/channeldetail';
// import {channelvideosData} from '../../data/channelvideos';
import Card3 from './Card3';
function Channel({route}) {
  const {id} = route.params;

  const [paramData, setParamData] = useState({
    part: 'snippet,statistics',
    id: id,
  });

  const [paramData2, setParamData2] = useState({
    channelId: id,
    part: 'snippet,id',
    order: 'date',
    maxResults: '50',
  });

  const {data: channeldetailData} = useFetch('/channels', paramData);
  const {
    data: channelvideosData,
    loading,
    error,
  } = useFetch('/search', paramData2);

  useEffect(() => {
    setParamData({
      part: 'snippet,statistics',
      id: id,
    });
    setParamData2({
      channelId: id,
      part: 'snippet,id',
      order: 'date',
      maxResults: '50',
    });
  }, [id]);

  if (channeldetailData !== null || channelvideosData !== null) {
    const {snippet, statistics, brandingSettings, contentDetails} =
      channeldetailData?.items[0];
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        }}>
        <View style={{width: '95%'}}>
          <View>
            <Image
              source={{uri: brandingSettings?.image?.bannerExternalUrl}}
              alt="channel banner"
              style={{
                width: '100%',
                height: 100,
                // marginTop: 10,
                borderRadius: 10,
              }}
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: snippet?.thumbnails?.medium?.url}}
                alt="channel thumbnail"
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 10,
                  borderRadius: 50,
                  marginRight: 10,
                }}
              />

              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 5,
                    color: 'white',
                  }}>
                  {snippet?.title}
                </Text>
                <View style={{flexDirection: 'row', gap: 5}}>
                  <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                    {snippet?.customUrl}
                  </Text>
                  <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                    {statistics?.subscriberCount}
                  </Text>
                  <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                    {statistics?.videoCount}
                  </Text>
                </View>
              </View>

              {/* <Text>{statistics?.viewCount}</Text> */}
            </View>
            <View>
              <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                {snippet?.description?.slice(0, 150) + '...'}{' '}
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row', gap: 10, marginBottom: 5}}>
            <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>Videos</Text>
            <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>Playlist</Text>
          </View>
          <ScrollView>
            <View className="channel-videos-container">
              {channelvideosData?.items?.map(item => {
                return <Card3 item={item} />;
              })}
            </View>
          </ScrollView>
        </View>
      </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 10,
    width: 80,
    height: 30,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});
export default Channel;
