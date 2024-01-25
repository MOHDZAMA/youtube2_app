import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
// import {searchData as data} from '../../data/search';
import useFetch from '../../hooks/useFetch';

// const data = null;

import Card from '../feed/Card';

function Search({route}) {
  const {query} = route.params;
  const [paramData, setParamData] = useState('');

  const {data, loading, error} = useFetch(
    query ? '/search' : null,
    query ? paramData : null,
  );

  useEffect(() => {
    if (query !== null) {
      setParamData({
        q: query,
        part: 'snippet,id',
        maxResults: '50',
        order: 'date',
      });
    }
  }, [query]);

  console.log(data);

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
    // paddingTop: 10,
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
});

export default Search;
