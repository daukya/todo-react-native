import React, { Component } from 'react';
import {
  StyleSheet,
  View,Text, FlatList, TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {setDone} from '../redux/Action';
import {Button} from 'native-base';
class Listtodo extends Component {
  listNow (){
      //const {done} = this.props.myList;
      if(this.props.myStatus == 'todo') return this.props.myList.filter(e=>!e.done)
      else return this.props.myList.filter(e=>e.done)
  }
  render() {

    return (
      <View style={styles.container}>
       <FlatList
            data={this.listNow()}
            renderItem={({item}) => 
            <View>
                <View style = {styles.item}>
                  <Text>{item.id} - <Text style={{ color: 'red'}}>Toppic:</Text> {item.topic} - <Text style={{ color: 'red'}}>Content:</Text> {item.content}</Text>
                </View>
                
                    <View>
                    { item.done ? <Button block success onPress ={()=> this.props.setDone(item.id)}>
                      <Text>Miss</Text>
                    </Button> : <Button block success onPress ={()=> this.props.setDone(item.id)}>
                      <Text>done</Text>
                    </Button>  }
                    
                    
                    </View>
                
            </View>
            }
            keyExtractor={item => item.topic}
        />
      </View>
    );
  }
}
function mapStateToProps(state){
    return {
        myList: state.List,
        myStatus: state.Status
        
    }
}
export default connect(mapStateToProps,{setDone})(Listtodo)
const styles = StyleSheet.create({
  container: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dff9fb',
    width: 380
  },
  item:{
      marginTop: 20,
      backgroundColor: 'yellow',
      marginBottom : 10,
      justifyContent :'center',
      width: 320
  },
  btqua_done: {
    justifyContent: 'center',
    alignItems: 'center'
  
    
  },
  btqua_done2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e056fd',
  }
});
