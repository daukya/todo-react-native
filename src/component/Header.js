import React, { Component } from 'react';
import {
  StyleSheet,
  View,Text, TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {Hienform} from '../redux/Action';
class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
              <Text>LIST TO DO</Text>
            </View>
            <View style={styles.add}>
            <TouchableOpacity onPress={()=>this.props.Hienform()}>
                <Text>Add</Text>
            </TouchableOpacity>
            </View>
      </View>
    );
  }
}
export default connect(null,{Hienform})(Main)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4E538',
    width: 400,
    flexDirection: 'row'
  },
  add:{
    justifyContent: 'center',
    marginLeft: 250,
    backgroundColor: '#25CCF7',
    
  }
});
