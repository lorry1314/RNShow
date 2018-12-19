/*
 * @Author: Code4GL
 * @Date: 2018-12-17 15:24:19
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-19 15:30:00
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, FlatList, View, Platform, Alert
} from 'react-native';
import ComponentListCell from '../../components/component/ComponentListCell';
import ComponentList from '../../data/ComponentList';

export default class Index extends Component {

  creatItemSeparator () {
    return (
      <View style={styles.ItemSeparatorCell}>
        <View style={styles.ItemSeparator} />
      </View>
    );
  }

  renderItems = (data) => {
    const {navigation} = this.props;
    return (
      <ComponentListCell
        data={data.item}
        morePress={() => {
          if (Platform.OS === 'ios') {
            if (data.item.platform === 'all' || data.item.platform === 'ios') {
              return navigation.navigate(data.item.route);
            } else {
              return Alert.alert('该组件不支持IOS系统，请在Android系统上查看！');
            }
          } else {
            if (data.item.platform === 'all' || data.item.platform === 'android') {
              return navigation.navigate(data.item.route);
            } else {
              return Alert.alert('该组件不支持Android系统，请在IOS系统上查看！');
            }
          }
        }}
      />
    );
  }

  render () {
    return (
      <FlatList
        style={styles.container}
        data={ComponentList}
        renderItem={this.renderItems}
        ItemSeparatorComponent={this.creatItemSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  ItemSeparator: {
    height: 1,
    width: '93%',
    backgroundColor: 'rgba(230,230,230,1)'
  },
  ItemSeparatorCell: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
