var React = require('react-native');
var Parse = require('parse/react-native');
var Signin = require('./Components/Authentication/signin');

var {
	StyleSheet,
	Text,
	View
} = React;

module.exports = React.createClass({
	componentWillMount: function(){
		Parse.initialize("j8AibL4NM07erjAhMAWiJ8XpYVuzH7xgccH2k5PT", "IQNXeW4F16VtxlN776ybwTVyna0N4Y6VFAF4Fbfd");
	},
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
