import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class NewApp extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
