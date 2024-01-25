import React from 'react';
import {View, Text} from 'react-native';

function Shorts() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
      }}>
      <Text style={{color: 'white', fontSize: 20}}> Shorts </Text>
      <Text style={{color: 'white', fontSize: 20}}> comming soon.. </Text>
    </View>
  );
}

export default Shorts;
