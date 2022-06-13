import React from "react";
import { View,Text,FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from 'react-redux'
import Card from "../components/Card";
import Header from "../components/Header";


const LittleCard =({name})=>{
    return(
        <View style={{backgroundColor:"red",
        width:120,
        height:50,
        marginTop:10,
        borderRadius:4}}>
            <Text style={{
                textAlign:"center",
                color:"white",
                fontSize:22,
                marginTop:5
                }}>
{name}
            </Text>
        </View>
    )
}
const Explore=()=>{
    const CardData = useSelector(state=>{
        return state
    })
    return(
        <View style={{flex:1}}>
            <Header/>
            <ScrollView>

           
           <View style={{flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around"
        }}>
           <LittleCard name="Gaming"/>
           <LittleCard name="Trending"/>
           <LittleCard name="Music"/>
           <LittleCard name="Movies"/>
           <LittleCard name="Fashion"/>
           <LittleCard name="News"/>
           
           </View>
           <Text style={{
            margin:8,
            fontSize:22,
            borderBottomWidth:1
           }}>Trending Videos</Text>
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
 </ScrollView>
        </View>
    );
}
export default Explore