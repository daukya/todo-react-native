import React, {Component} from 'react';
import {View, Text, StyleSheet,ImageBackground} from 'react-native';
import {Button} from 'native-base';
export default class Hello extends Component {
    render(){
        return(
            <ImageBackground source={require('../image/Danh-ngon-tieng-anh-ve-su-co-don-1.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
            <Button block success
                    onPress = {() => {this.props.navigation.navigate("App");
                    } }
                ><Text> GO! </Text></Button>
            </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      }
  });
  