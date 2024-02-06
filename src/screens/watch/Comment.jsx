import React, {useState, useMemo, useRef, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {commentData} from '../../data/comment';
import dayjs from 'dayjs';
import BottomSheet from '../../components/BottomSheet';

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

function Comment(inneRef) {
  console.log(inneRef);
  return (
    <BottomSheet>
      <View style={{flex: 1, backgroundColor: 'orange'}} />
    </BottomSheet>
  );
}

export default Comment;

const styles = StyleSheet.create({
  comment: {
    height: 280,
  },
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
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
