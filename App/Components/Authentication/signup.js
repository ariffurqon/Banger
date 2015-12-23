var React = require('react-native');
var Parse = require('parse/react-native');
var Button = require('../Common/button');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image
} = React;



module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      passwordConfirmation: ''
    };
  },
  render: function() {
    return (
      <View style={styles.mainContainer}>
        <Text>Sign Up</Text>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
              <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/tGMOlcW.png'}}/>
              <TextInput 
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Username"
                  placeholderTextColor="#FFF"   
                  value={this.state.username}
                  onChangeText={(text) => this.setState({username: text})} />
          </View>

          <View style={styles.inputContainer}>
              <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/CmWEUsT.png'}}/>
              <TextInput
                  password={true}
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Password"
                  placeholderTextColor="#FFF"
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password: text})} />
          </View>

          <View style={styles.inputContainer}>
              <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/CmWEUsT.png'}}/>
              <TextInput
                  password={true}
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Confirm Password"
                  placeholderTextColor="#FFF"
                  value={this.state.passwordConfirmation}
                  onChangeText={(text) => this.setState({passwordConfirmation: text})} />
          </View>
      </View>
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Signup'} onPress={this.onSignUpPress} />
        <Button text={'Oops, I do have an account..'} onPress={this.onSigninPress} />
      </View>
    );
  },
  onSignUpPress: function() {
      if (this.state.password !== this.state.passwordConfirmation ) {
        return this.setState({errorMessage: 'Your passwords do not match'});
      }

      var user = new Parse.User();
      user.set('username', this.state.username);
      user.set('password', this.state.password);

      user.signUp(null, {
        success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'videos'}]); },
        error: (user, error) => { this.setState({errorMessage: error.message}); }
      });
  },
  onSigninPress: function() {
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height,
    backgroundColor: '#FF3366'
  },
    mark: {
      width: 120,
      height: 120
        },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .5,
      backgroundColor: 'transparent'
    },
    signin: {
      backgroundColor: 'white',
      padding: 20,
      alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ccc',
      flex: .15,
      padding: 10
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 10,
    },
    whiteFont: {
      color: '#FFF'
    }
});