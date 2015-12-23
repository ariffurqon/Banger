var React = require('react-native');
var Signin = require('./Components/Authentication/signin');

var {
	StyleSheet,
	Text,
	View
} = React;

module.exports = React.createClass({
	render: function(){
		return (
			<View style={styles.container}>
				<Signin />
			</View>
		)
	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FF3366'
	}
});
