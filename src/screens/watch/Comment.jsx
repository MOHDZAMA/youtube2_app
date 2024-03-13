import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import dayjs from 'dayjs';
import {commentData} from '../../data/comment';

function Comment() {
  // const {id} = useParams();
  const [paramData, setParamData] = useState({
    part: 'snippet',
    // videoId: id,
    maxResults: '100',
  });
  // const {
  // data: commentData,
  // loading,
  // error,
  // } = useFetch("/commentThreads", paramData);

  useEffect(() => {
    setParamData({
      part: 'snippet',
      // videoId: id,
      maxResults: '100',
    });
  }, []);
  return (
    <ScrollView>
      {commentData?.items?.map(({snippet, id}) => (
        <View style={styles.container}>
          <Image
            src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          />
          <View>
            <Text style={styles.text}>
              {snippet?.topLevelComment?.snippet?.authorDisplayName}
            </Text>
            <Text style={styles.text}>
              {dayjs(
                snippet?.topLevelComment?.snippet?.publishedAt?.slice(0, 10),
              ).format('MMM D, YYYY')}
            </Text>
            <Text style={styles.text}>
              {snippet?.topLevelComment?.snippet?.textDisplay}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default Comment;

const styles = StyleSheet.create({
  comment: {
    height: 280,
  },
  container: {
    flex: 1,
    // backgroundColor: '#111',
    padding: 5,
    color: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
  text: {
    color: ' rgba(255, 255, 255, 0.8)',
  },
});

/**
 *       {commentData?.items?.map(({snippet, id}) => (
              <View key={id} className="comment">
                <Image
                  src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                />

                <Text>
                  {snippet?.topLevelComment?.snippet?.authorDisplayName}
                </Text>
                <Text>
                  {dayjs(
                    snippet?.topLevelComment?.snippet?.publishedAt?.slice(
                      0,
                      10,
                    ),
                  ).format('MMM D, YYYY')}
                </Text>
                <Text>{snippet?.topLevelComment?.snippet?.textDisplay}</Text>
              </View>
            ))}
 */
