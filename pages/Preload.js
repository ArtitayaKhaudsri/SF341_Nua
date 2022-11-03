import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class Preload extends React.Component {
  render() {
    return (
      <View style={styles.preload}>
        
        <Image 
        style={{width: 206, height: 206}}
        source={require('../img/Logo_white.png')}

        />
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preload: {
    flex: 1,
    backgroundColor: '#E64848',
    alignItems: 'center',
    justifyContent: 'center',
  },

});