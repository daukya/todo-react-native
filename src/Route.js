//cac man hinh
import React, {Component} from 'react';
import {
    createStackNavigator,
  } from 'react-navigation';
  import Hello from './component/Hello';
  import App from './App';
  const Nvg = createStackNavigator({
    Hello: { screen: Hello,
        navigationOptions:{
            title: 'HI YOU! WELCOME TO LIST TODO'
          }
     },
     App: {
         screen: App,
         navigationOptions:{
            title: 'MY LIST'
          }
     }
  });
  
  export default class Route extends Component{
      render(){
          return(
             <Nvg />
          )
      }
  }