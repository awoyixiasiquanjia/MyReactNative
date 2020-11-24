import React, {Component} from 'react'
import { View ,Text,StyleSheet,Image} from 'react-native'
import MePage from './mepage/mepage'
import HomePage from './homepage/homepage'
import WorkPage from './workpage/workpage'
import TabNavigator from 'react-native-tab-navigator'
export default class myApp extends Component{
   constructor(){
       super()
       this.state={
        selectedTab:"work"
       }
   }
   render(){
    return <TabNavigator
    tabBarStyle={{ height: 60, overflow: 'hidden',backgroundColor:"#ffffff" }}
    sceneStyle={{ paddingBottom: 0 }}
      >

    <TabNavigator.Item style={styles.itemstyle}
    selected={this.state.selectedTab === 'work'}
    renderIcon={() => <Image source={require('./img/home_workbench_normal.png')} style={styles.imgStyle}/>}
    renderSelectedIcon={() => <Image source={require('./img/home_workbench_press.png')} style={styles.imgStyle} />}
    onPress={() => this.setState({ selectedTab: 'work' })}>
    {<WorkPage></WorkPage>}
  </TabNavigator.Item>

  <TabNavigator.Item style={styles.itemstyle}
    selected={this.state.selectedTab === 'home'}
    renderIcon={() => <Image source={require('./img/home_off.png')} style={styles.imgStyle} />}
    renderSelectedIcon={() => <Image source={require('./img/home_tupian.png')}  style={styles.imgStyle}/>}
    onPress={() => this.setState({ selectedTab: 'home' })}>
    {<HomePage></HomePage>}
    </TabNavigator.Item>

    <TabNavigator.Item style={styles.itemstyle}
    selected={this.state.selectedTab === 'me'}
    renderIcon={() => <Image source={require('./img/home_perona_normal.png')}  style={styles.imgStyle}/>}
    renderSelectedIcon={() => <Image source={require('./img/home_perona_press.png')} style={styles.imgStyle} />}
    onPress={() => this.setState({ selectedTab: 'me' })}>
    {<MePage></MePage>}
    </TabNavigator.Item>
   </TabNavigator>  
    
   }
}


// const styles = {
//      allView:{
//         backgroundColor:"#00b5ad"
//      }

// }

const styles = StyleSheet.create({
       allView:{
           backgroundColor:"red"
       },
       imgStyle:{
           height:50,
           width:50,
       },
       itemstyle:{
        backgroundColor:"#ffffff",
    }

})