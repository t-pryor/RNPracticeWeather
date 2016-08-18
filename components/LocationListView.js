'use strict';

import React, {Component} from 'react';
import { ListView, Text, View, TouchableHighlight, StyleSheet, Image, NavigatorIOS } from "react-native";

const WeatherDetail = require('./WeatherDetail')

//ListViews: list of views

class LocationListView extends Component {
    // Initialize the hardcoded data
    constructor(props) {
      super(props);

      //arrow syntax: if row changed, re-render
      // dataSource: a source of information about the data that needs to be rendered
      // renderRow (cellForRowAtIndexPath)
      // should return a component based on the data from one element of the dataSource
      // ListView.DataSource needs to implement rowHasChanged method
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(props.data)
      }
    }

    pressRow(rowDataName) {
      console.log(rowDataName);

      this.props.navigator.push({
        title: rowDataName,
        component: WeatherDetail,
        passProps: {
          pushEvent: rowDataName
        }
      });
    }

    // renderRow: required by ListView
    // should return JSX based on the data for a given row
    renderRow(rowData) {
      console.log(rowData);
        return (
            <TouchableHighlight
                onPress={()=> {this.pressRow(rowData)}}
                underlayColor='#ddd'
            >
            <View style={localStyles.row}>
              <Text style={{fontSize: 30}}>
                {rowData}
              </Text>
            </View>
            </TouchableHighlight>
        );
    }


    // Good example of where RN shines because it can leverate its host platform
    // On iOS, <ListView> rendered as a UITableView: highly optimized so that rendering is smooth
    // ListView requires two props: dataSource and renderRow
    // dataSource is a source of information about the data that needs to be rendered
    // renderRow should return a comonent based on the data from one element of the dataSource
    render() {
      console.log(this.state.dataSource);
      return (
        <ListView
          contentInset={{
            bottom: 0
          }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      )
    }
}

const localStyles = StyleSheet.create({
  row: {
      flex: 1,
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#FCFFF5',
      borderColor: '#335075',
      borderBottomWidth: 1,
      justifyContent: 'flex-start'
  }
});

module.exports = LocationListView;
