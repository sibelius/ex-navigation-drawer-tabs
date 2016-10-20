import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

export default class TabThree extends Component {
  static route = {
    navigationBar: {
      title: 'TabThree',
    },
  };

  render() {
    return (
      <ScrollView>
        <Image style={styles.cover} source={require('../assets/space.jpg')} />
        <View style={styles.article}>
          <Text style={styles.heading}>The Hitchhiker's Guide to the Galaxy</Text>
            <Text style={styles.body}>For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons.</Text>
        </View>
      </ScrollView>
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

