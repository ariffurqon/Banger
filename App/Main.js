var React = require('react-native');
var Parse = require('parse/react-native');
var Signin = require('./Components/Authentication/signin');
var Signup = require('./Components/Authentication/signup');
var Videos = require('./Components/Videos/videos')

var {
  StyleSheet,
  Navigator
} = React;

var ROUTES = {
  signin: Signin,
  signup: Signup,
  videos: Videos
};

module.exports = React.createClass({
  componentWillMount: function(){
      Parse.initialize("j8AibL4NM07erjAhMAWiJ8XpYVuzH7xgccH2k5PT", "IQNXeW4F16VtxlN776ybwTVyna0N4Y6VFAF4Fbfd");
  },
  renderScene(route, navigator) {
      var Component = ROUTES[route.name]; 
      return <Component route={route} navigator={navigator} />;
  },
  render() {
    return (
      <Navigator
              style={styles.container}
              initialRoute={{name: 'signin'}}
              renderScene={this.renderScene}
              configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});