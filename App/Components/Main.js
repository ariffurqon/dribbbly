var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  ActivityIndicatorIOS
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
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Main extends React.Component{
   constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
   }
   handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    });
   }
   handleSubmit(){
    //update the indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    console.log('SUBMIT', this.state.username)
    //fetch data from dribbble
    //reroute to the next passing that dribbble information
   }
  render(){
    return(
      <View style={styles.mainContainer}>
          <Text style={styles.title}> Search for Dribbble User </Text>
          <TextInput
              style={styles.searchInput}
              value={this.state.username}
              onChange={this.handleChange.bind(this)} />

            <TouchableHighlight
                style={styles.button}
                onPress={this.handleSubmit.bind(this)}
                underlayColor="white" >

            <Text style={styles.buttonText}>SEARCH</Text>
            </TouchableHighlight>
      </View>
      )
  }
};

module.exports = Main;