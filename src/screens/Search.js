import React,{useState} from "react";
import { View,TextInput,FlatList,ActivityIndicator} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import Constant from 'expo-constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MiniCard from "../components/MiniCard";
import { useDispatch, useSelector } from "react-redux";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=songs&type=video&key=AIzaSyBUDIc8uHOJYnXO9EsoscfQB2Ior3GmMqw
const Search =({navigation})=>{
    const {colors}=useTheme()
    const mycolor=colors.iconColor
    const [value,setValue]=useState("")
    // const [miniCardData,setMiniCard]= useState([])
    const dispatch = useDispatch()
    const [loading,setLoading]=useState(false)
    const miniCardData = useSelector(state=>{
        return state
    })

    const fetchdata =()=>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBUDIc8uHOJYnXO9EsoscfQB2Ior3GmMqw`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setLoading(false)
            // setMiniCard(data.items)
            dispatch({type:"add",payload:data.items})

        })
    }
    return(
        <View style={{flex:1,
            marginTop:Constant.statusBarHeight
            }}>
            <View style={{
                padding:5,
                flexDirection:"row",
                justifyContent:"space-around",
              
                elevation:5,
                // borderColor:"white"
            }}>
            <Ionicons style={{color:mycolor}} onPress={()=>navigation.goBack()} name="arrow-back-sharp" size={32} color="black" />
            <TextInput 
            style={{width:"70%",
                    backgroundColor: colors.headerColor
    }}
            value={value}
            onChangeText={(text)=>setValue(text)}
            />
            <MaterialCommunityIcons style={{color:mycolor}} onPress={()=>fetchdata()} name="send" size={24} color="black" />
            </View>
            {/* <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard /> */}
            {loading?<ActivityIndicator style={{marginTop:10}} color="red" size="large" />:null}
            <FlatList 
            keyExtractor={item=>item.id.videoId}
            data={miniCardData}
            renderItem={({item})=>{
                return <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
            }}
            />
        </View>
    )
}
export default Search