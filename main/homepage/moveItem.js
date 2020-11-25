import React,{Component} from 'react'

import {
View,
Image,
Text
} from 'react-native'
export default class MovieItem  extends Component{
    render(){
             return <View style={{margin:10,padding:5}}>
              <Image source={{uri:this.props.item.pic_url}} style={{height:100,width:100}}/>
              <Text>{this.props.item.movieName}</Text>
              <Text  style={{backgroundColor:"#dddddd" ,height:2,width:"100%",marginTop:10}}></Text>
             </View>
    }
}