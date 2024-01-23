import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Card from './Card';

import {searchData as data} from '../../data/search';

function Feed() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {data?.items?.map(item => {
          return <Card item={item} key={item.id.videoId} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
});

export default Feed;
