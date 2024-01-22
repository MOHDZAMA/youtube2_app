import React, {useState, useRef} from 'react';
import {
  Modal,
  Text,
  View,
  PanResponder,
  Button,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useModal from '../hooks/useModal';

function Watch() {
  const {watch, setWatch} = useModal();

  const navigation = useNavigation();
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
  return (
    <Modal visible={watch} animationType="fade">
      <View style={{flex: 1}}>
        <Text>Watch</Text>
        <Button
          title="Playlist"
          onPress={() => {
            navigation.navigate('Playlist');
            setWatch(false);
          }}
        />
        <View
          style={{height: 200, backgroundColor: 'red', width: 300}}
          {...panResponder.panHandlers}></View>
        <ScrollView>
          <View
            style={{height: 900, backgroundColor: 'blue', width: 300}}></View>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default Watch;
