import React, {Component} from 'react'

import Swiper from 'react-native-swiper'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
export default class HomePage extends Component{
    constructor(){
      super()
      this.state={
        list:[
          {imgUrl:require("../img/menu1.png"),name:"新闻咨询"},
          {imgUrl:require("../img/menu2.png"),name:"图片分析"},
          {imgUrl:require("../img/menu3.png"),name:"商品购买"},
          {imgUrl:require("../img/menu4.png"),name:"视频专区"},
          {imgUrl:require("../img/menu5.png"),name:"热映电影"},
          {imgUrl:require("../img/menu6.png"),name:"连心我们"},
        ]
      }

    }


       render(){
         return <View style={{flex:1,backgroundColor:"#ffffff"}}>
           <View style={{height:220}}>
          <Swiper style={styles.wrapper} showsButtons={true} style={styles.wrapper} autoplay="true">
          <View >
          <Image style={styles.img} source={{uri:"https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2737051719,3043300347&fm=26&gp=0.jpg"}} />
          </View>
         <View>
         <Image style={styles.img} source={{uri:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2577576757,3841266884&fm=26&gp=0.jpg"}}/>
        </View>
        <View>
        <Image style={styles.img} source={{url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2740256896,1985134505&fm=26&gp=0.jpg"}}/>
        </View>
      </Swiper>
      </View>
      <View>
      </View>
      {this.getNineView()}
         </View>
       }

       getNineView(){
       return   <View style={{flexDirection:"row",flexWrap:"wrap"}}> 
     {this.state.list.map(item=>{
             return <View style={{width:"33.33%",alignItems:"center",justifyContent:"center",marginTop:10}}>
              <Image source={item.imgUrl} style={{width:60,height:60}}/>
              <Text style={{marginTop:5}}>{item.name}</Text>
             </View>      
         })}
     </View> 

       }

}


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  img: {
    height:"100%",
    width:"100%"
  }
})