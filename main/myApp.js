import React, {Component} from 'react'
import { View ,Text,StyleSheet} from 'react-native'
export default class myApp extends Component{
   constructor(){
       super()
   }
    
   render(){
    return <View style={styles.allView}>
    <Text>Engine: Hermes</Text>
      </View>
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
       }

})