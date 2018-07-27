import { AppRegistry } from 'react-native';
import Route from './src/Route';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('todo', () => Route);
