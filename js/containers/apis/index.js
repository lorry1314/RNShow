/*
 * @Author: Code4GL
 * @Date: 2018-12-17 15:24:58
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-17 15:32:28
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Index extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>APIs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
