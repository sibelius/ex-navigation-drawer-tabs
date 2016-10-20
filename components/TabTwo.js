import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

export default class TabTwo extends Component {
  static route = {
    navigationBar: {
      title: 'TabTwo',
    },
  };

  render() {
    return (
      <Image style={styles.gif} source={require('../assets/cat.gif')} />
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

