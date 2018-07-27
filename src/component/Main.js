import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Listtodo from './Listtodo';
import Header from './Header';
import Statusbar from './Statusbar';
import Form from './Form';
import {connect} from 'react-redux';
class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        {this.props.Isadding ? <Form /> : null}
        <Listtodo />
        <Statusbar />
      </View>
    );
  }
}
function mapStateToProps(state){
  return {
    Isadding : state.Isadding
  }
}
export default connect(mapStateToProps)(Main)
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
    
  }
});
