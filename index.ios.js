/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,      // an ES6 thing called "destructuring."
  StyleSheet,
  Text,
  View,
} = React;

class Banger extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Banger!
        </Text>
        <Text style={styles.instructions}>
          I have missed you, baby...
        </Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Banger', () => Banger);
