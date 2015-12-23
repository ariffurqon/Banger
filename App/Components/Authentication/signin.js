var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Parse = require('parse/react-native');
var Button = require('../Common/button');

var {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image
} = React;


module.exports = React.createClass({
	getInitialState: function(){
		return {
			username: '',
			password: '',
			errorMessage: ''
		};
	},
	render: function(){
		return (
			<View style={styles.mainContainer}>
				<View style={styles.header}>
				    <Image style={styles.mark} source={{uri: 'http://i.imgur.com/obc2KS4.png'}} />
				</View>
				<View style={styles.inputs}>
	                <View style={styles.inputContainer}>
	                    <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/tGMOlcW.png'}}/>
	                    <TextInput 
	                        style={[styles.input, styles.whiteFont]}
	                        placeholder="Username"
	                        placeholderTextColor="#FFF"
	                        value={this.state.username}
	                        onChangeText={ (text) => this.setState({username: text})} />
	                </View>
	                <View style={styles.inputContainer}>
	                    <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/CmWEUsT.png'}}/>
	                    <TextInput
	                        password={true}
	                        style={[styles.input, styles.whiteFont]}
	                        placeholder="Pasword"
	                        placeholderTextColor="#FFF"
	                        value={this.state.password}
	                        onChangeText={ (text) => this.setState({password: text})} />
	                </View>

	                <View style={styles.forgotContainer}>
	                    <Text style={styles.whiteFont}>Forgot Password</Text>
	                </View>

				</View>
				<View style={styles.signin}>
					<Text>{this.state.errorMessage}</Text>
	               <Button text={'Sign in'} onPress={this.onPress} />
	            </View>
				<View style={styles.signup}>
				    <Text style={styles.greyFont}>Don`t have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
				</View>
			</View>
		)
	},
	onPress: function(){
		Parse.User.logIn(this.state.username, this.state.password, {
			success: (user) => {console.log(user);},
			error: (data, error) => {this.setState({errorMessage: error.message}); }
		})
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
	title: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center',
		color: '#ffff'
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
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ccc',
      flex: .15
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