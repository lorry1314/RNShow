/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:43:52
 * @Last Modified by:   Code4GL
 * @Last Modified time: 2018-12-23 22:43:52
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TabBarIOSScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>TabBarIOS</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
