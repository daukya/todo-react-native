import React, { Component } from 'react';
import {
  StyleSheet,
  View,Text, TouchableOpacity, TextInput
} from 'react-native';
import {connect} from 'react-redux';
import {Add} from '../redux/Action';
 class Form extends Component {
     constructor(props){
         super(props);
         this.state={
             topic: '',
             content: ''
         };
         this.add = this.add.bind(this);
     }
     add(){
         const {topic,content} = this.state;
         if (topic == '' && content == '') return null;
         this.props.Add(topic,content)
     }
  render() {
    return (
        <View style={{ alignItems: 'center' }}>
        <TextInput  style={styles.tInput} value={this.state.topic} onChangeText={topic => this.setState({topic: topic})} placeholder='topic'/>
        <TextInput  style={styles.tInput} value={this.state.content} onChangeText={content => this.setState({content: content})} placeholder='content'/>
        <TouchableOpacity onPress={this.add} style={styles.add}><Text>Add</Text></TouchableOpacity>
    </View>
    );
  }
}

export default connect(null,{Add})(Form)
const styles = StyleSheet.create({
    tInput: {
        backgroundColor: 'pink',
        height : 50,
        width: 300,
        margin: 10,
        paddingHorizontal: 10
    },
    add:{
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: '#25CCF7'
      }
  })