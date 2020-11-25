import React,{Component} from 'react'
import MyApp from './myApp'
import movieList from './homepage/homeList'
import {Router,Stack,Scene} from 'react-native-router-flux'
export default class firstPage extends Component{
    render(){
         return  <Router>
         <Stack key="app">
          {/* //Stack中的首个Scene是默认展示的  ，所有的路由规则
           key属性表示路由规则的名称，将来使用这个key进行路由的导航，
           所以所有的页面都得提供一个唯一的key属性
          
          */}
         <Scene key="myAPP" component={MyApp} title="首页" hideNavBar={true} /> 
         <Scene key="movieList" component={movieList} title="电影列表" /> 
       </Stack>
       </Router>
    }
    // render(){
    //    return <View>
    //        <Text>这是首页</Text>
    //    </View>
    // }
}