import React,{Component} from 'react'
import { View ,Text,ScrollView} from 'react-native'
import MovieItem from './moveItem'
export default class HomeList extends Component{
    constructor(){
        super()
        this.state={
            movieList:[],
            key:"0b314c8a22d93a069b722211f09100f9",
            city:3
        }
    }
    render(){
        return <View>
             <ScrollView>
             {this.getMovieList()}
             </ScrollView>
        </View>
    }


   componentDidMount(){
    const url =   `http://v.juhe.cn/movie/movies.today?key=${this.state.key}&cityid=${this.state.city}`
    fetch(url).then(res=>{
       return  res.json()
    }).then(data=>{
      this.setState({
          movieList:data.result
      })
     console.warn(data)
    })

   }

   getMovieList(){
      return  this.state.movieList.map((item,index)=>{
                return <MovieItem item={item}></MovieItem>
       })
   }

}