import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  TabNavigation,
  TabNavigationItem,
  StackNavigation,
} from '@exponent/ex-navigation';
import { Ionicons } from '@exponent/vector-icons';

import { Router } from '../main';

function getColor(isSelected) {
  return isSelected ? '#fff' : '#000';
}

export default class TabNavigationExample extends Component {
  static route = {
    navigationBar: {
      title: 'Tab Navigation',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <TabNavigation
          id="tab-navigation"
          navigatorUID="tab-navigation"
          initialTab="first">
          <TabNavigationItem
            id="first"
            title="First"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-boat-outline" size={24} color={getColor(isSelected)} />}>
            <StackNavigation
              id="tabOne"
              navigatorUID="tabOne"
              initialRoute={Router.getRoute('tabOne')}
            />
          </TabNavigationItem>
          <TabNavigationItem
            id="second"
            title="Second"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-bulb-outline" size={24} color={getColor(isSelected)} />}>
            <StackNavigation
              id="tabTwo"
              navigatorUID="tabTwo"
              initialRoute={Router.getRoute('tabTwo')}
            />
          </TabNavigationItem>
          <TabNavigationItem
            id="third"
            title="Third"
            selectedStyle={styles.selectedTab}
            renderTitle={this._renderTitle}
            renderIcon={(isSelected) => <Ionicons name="ios-bowtie-outline" size={24} color={getColor(isSelected)} />}>
            <StackNavigation
              id="tabThree"
              navigatorUID="tabThree"
              initialRoute={Router.getRoute('tabThree')}
            />
          </TabNavigationItem>
        </TabNavigation>
      </View>
    );
  }

  _renderTitle = (isSelected, title) => {
    return (
      <Text style={{color: getColor(isSelected)}}>
        {title}
      </Text>
    );
  }
}

const IMAGE_SIZE = Dimensions.get('window').width / 2 - 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

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

  cover: {
    flex: 1,
    height: 160,
    width: null,
    resizeMode: 'cover',
  },

  article: {
    padding: 20,
  },

  heading: {
    margin: 4,
    color: '#222',
    fontWeight: 'bold',
    fontSize: 32,
  },

  body: {
    margin: 4,
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
  },

  gif: {
    flex: 1,
    height: null,
    width: null,
    backgroundColor: '#CCC',
  },

  selectedTab: {
    backgroundColor: '#0084FF',
  },
});
