var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFE5FF'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  }
});

class Main extends React.Component{
  render(){
    return(
      <View style={styles.mainContainer}>
          <Text> Testing the Router </Text>
      </View>
      )
  }
};

module.exports = Main;