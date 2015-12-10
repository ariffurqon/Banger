/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,      // an ES6 thing called "destructuring."
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} = React;

class Banger extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
            title: 'Banger',
            component: Main
        }} />
    );
  }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
});



AppRegistry.registerComponent('Banger', () => Banger);
