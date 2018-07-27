import React, { Component } from 'react';
import {
  StyleSheet,
  View,Text, TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {Todo, Done} from '../redux/Action';
class Statusbar extends Component {
    statusNow (st_now){
        if(this.props.myStatus == st_now) return {backgroundColor: '#25CCF7'}
        return '';
    }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity  style={this.statusNow('todo')} onPress={()=>{ this.props.Todo()}}>
            <Text>To do</Text>
        </TouchableOpacity>
        <TouchableOpacity style={this.statusNow('done')}  onPress={()=>{ this.props.Done()}}>
            <Text>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state){
    return {
        myStatus : state.Status
    }
}
export default connect(mapStateToProps,{ Todo, Done })(Statusbar)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#C4E538',
    flexDirection : 'row',
    width: 400
  }
});
