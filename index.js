/**
 * @format
 */

import {AppRegistry} from 'react-native';
import FirstPage from './main/firstPage'
import {name as appName} from './app.json';
import MyApp from './main/myApp'
AppRegistry.registerComponent(appName, () => FirstPage);  //进行首页的注册
