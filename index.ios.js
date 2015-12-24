var React = require('react-native');
var Main = require('./App/Components/Main');

window.React = React;

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

class dribbbly extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Dribbbly',
          component: Main 
        }} />
    );
  }
};

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFE5FF'
  },
});

AppRegistry.registerComponent('dribbbly', () => dribbbly);