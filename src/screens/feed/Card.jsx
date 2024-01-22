import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import useModal from '../../hooks/useModal';

function Card() {
  const navigation = useNavigation();
  const {setWatch} = useModal();

  return (
    <View>
      <TouchableOpacity style={styles.touch} onPress={() => setWatch(true)}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={styles.thmimg}
        />

        <View>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.titleimg}
          />
          <View>
            <Text>Tittle</Text>
            <Text>channelId</Text>
            <Text>Description</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    height: 300,
    width: '100%',
  },
  thmimg: {
    height: 150,
    width: 150,
  },
  titleimg: {
    width: 30,
    height: 30,
  },
});
export default Card;
