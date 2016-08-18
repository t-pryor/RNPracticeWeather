// ES6: RN ships with ES6 support, so don't worry about compatibility

// IMPORTING REACT COMPONENTS and default components
import React, { Component } from 'react';
// IMPORT REACT NATIVE COMPONENTS
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const LocationListView = require('./components/LocationListView')

// Everything in React/React Native Native is a component
// ES6 Syntax: extend (inherit) the react component imported earlier
// only thing require is a render function which returns JSX
// JSX is a syntax for embedding markup within code
// You can put any JS expression inside braces in JSX

class RNPracticeWeather extends Component {

  constructor(props) {
    super(props);

    this.locations = ['Toronto', 'Ottawa', 'Montreal', 'Quebec City', "St. John's"];
  }

  render() {

    //Props:
    // most components customized when created
    // NavigatorIOS: built-in react component:
    // prop initial route
    return (
      // JSX use JS code within it
      <NavigatorIOS
        style={localStyles.navigator}
        initialRoute={{
          component: LocationListView,
          title: 'Cities',
          passProps: {
            data: this.locations
          }
        }}
      />
    );
  }
}

// StyleSheet contains a set of objects that represent CSS-like styles
// Comment these out, create a new file called base styles
// React for the Web: use separate styleshee files (CSS, SASS or Less)
// RN brings styles into the world of Javascript and fores you link style objects explicitly to components
// Strong reactions: but I don't know about pros and cons. Do know that JSX is seamless
// RN implements a subset of available CSS styles
// Instead of stylesheets we work with JS style objects
// React strength: forces you to keep your JS code-your components-modular
// RN forces us to write modular styles
// HOW ABOUT REACT?


// Stylesheet construct is optional but provides key advantages
// Ensures values are immutable
// also ensured they are created once for the application and not on every render
// Style concatenation:
// <Text style={[styles.button, styles.accentText]}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// show it inline, then show it separate it out


// Flexbox is central to building UIs in React Native
// You should be able to create predictably structured layouts given dynamically sized elements
// Especially helpful for Mobile: multiple screen sizes and orientations
// By setting the flex property, we are explicitly opting in to flexbox behavior
// This number deternmines the relative weight each child gets

const localStyles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})

// this tells RN which component is the root for the App
// exposes component in AppDelegate.m
AppRegistry.registerComponent('RNPracticeWeather', () => RNPracticeWeather);
