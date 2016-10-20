import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

export default class TabOne extends Component {
  static route = {
    navigationBar: {
      title: 'TabOne',
    },
  };

  render() {
    return (
      <View style={styles.images}>
        <Image style={styles.image} source={require('../assets/beetle.jpg')}/>
        <Image style={styles.image} source={require('../assets/colorful-windows.jpg')}/>
        <Image style={styles.image} source={require('../assets/paintbrush.jpg')}/>
        <Image style={styles.image} source={require('../assets/sparkles.jpg')}/>
      </View>
    )
  }
}

const IMAGE_SIZE = Dimensions.get('window').width / 2 - 16;

const styles = StyleSheet.create({
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },

  image: {
    flex: 0.5,
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    resizeMode: 'cover',
    margin: 4,
    borderRadius: 3,
  },
});

