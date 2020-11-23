/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MyApp from './main/myApp'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyApp);  //进行首页的注册
