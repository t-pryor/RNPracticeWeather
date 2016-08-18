'use strict';

import React, {Component} from 'react';
import { Text, View, StyleSheet, TabBarIOS, NavigatorIOS, ListView, WebView } from "react-native";

class WeatherDetailData extends Component {

    static get defaultProps() {
      return {
        weatherDictionary: {
          'Toronto': 'https://weather.gc.ca/city/pages/on-143_metric_e.html',
          'Ottawa': 'https://weather.gc.ca/city/pages/on-118_metric_e.html',
          'Montreal': 'https://weather.gc.ca/city/pages/qc-147_metric_e.html',
          'Quebec City': 'https://weather.gc.ca/city/pages/qc-133_metric_e.html',
          "St. John's": 'https://weather.gc.ca/city/pages/nl-24_metric_e.html'

        }
      }
    }

    constructor(props) {
        super(props);

        // this.props.weatherDictionary = {
        //     'Toronto': 'https://weather.gc.ca/city/pages/on-143_metric_e.html',
        //     'Ottawa': 'https://weather.gc.ca/city/pages/on-118_metric_e.html',
        //     'Montreal': 'https://weather.gc.ca/city/pages/qc-147_metric_e.html',
        //     'Quebec City': 'https://weather.gc.ca/city/pages/qc-133_metric_e.html',
        //     "St. John's": 'https://weather.gc.ca/city/pages/nl-24_metric_e.html'
        // }
    }

    render() {
        let chosenCity = this.props.pushEvent;
        let uriString = this.props.weatherDictionary[chosenCity];
        console.log(uriString);

        // WebView: how does it render in iOS
        //
        return (

            <WebView
                source={{uri: uriString}}
                style={{marginTop: 10}}
            />
        );

    }
}

module.exports = WeatherDetailData;
