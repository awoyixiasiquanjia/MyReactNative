import React,{Component} from 'react'
import MyApp from './myApp'
import {Router,Stack,Scene} from 'react-native-router-flux'
export default class firstPage extends Component{
    render(){
         return  <Router>
         <Stack key="app">

          {/* //Stack中的首个Scene是默认展示的    */}
         <Scene key="myAPP" component={MyApp} title="首页" hideNavBar={false} /> 

       </Stack>
       </Router>
    }
    // render(){
    //    return <View>
    //        <Text>这是首页</Text>
    //    </View>
    // }
}