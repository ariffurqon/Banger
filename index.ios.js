/**
 * index.ios.js
 */
 
'use strict';

var React = require('react-native');
var Main = require('./App/Main');


var {
  AppRegistry,     
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
