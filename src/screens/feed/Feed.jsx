import React, {useState, useContext} from 'react';
import {ModalContext} from '../../context/Contex';

import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Watch from '../Watch';
import Card from './Card';

function Feed() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    display: 'flex',
    height: '100%',
    width: '100%',
    overflow: 'scroll',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Feed;
