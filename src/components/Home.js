import React from 'react'
import { View,Text,ScrollView,FlatList } from 'react-native'
import Card from './Card'
import Header from './Header'
import { useSelector } from 'react-redux'


const Home=({navigation})=>{
    const CardData = useSelector(state=>{
        return state.cardData
    })
    return(
        <View style={{flex:1}}>
          <Header />
         <FlatList
          keyExtractor={item=>item.id.videoId}
         data={CardData}
         renderItem={({item})=>{
             return <Card
             videoId={item.id.videoId}
             title={item.snippet.title}
             channel={item.snippet.channelTitle}
             />
         }}
         />
        </View>
    )
}
export default Home