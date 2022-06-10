import React from 'react'
import { View,Text,Image,Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';



const Card=(props)=>{
    return(
        <View style={{
            shadowColor: props.mycolor,
            shadowOffset: { width: 0, height: 0.5 },
            shadowOpacity: 0.5,
            shadowRadius: 1,  
            elevation:5,
            marginBottom:10
        }}>
            <Image
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
             style={{
                 width:"100%",
                 height:100
             }}
            />

       <View style={{
           flexDirection:"row",
           margin:5
       }}>
       <MaterialIcons name="account-circle" size={40} color={props.mycolor}/>

       <View style={{
           marginLeft:10
       }}>
            <Text style={{
                fontSize:20,
                width:Dimensions.get("screen").width-50
        }}
                ellipsizeMode="tail"
                numberOfLines={1}
                >{props.title}</Text>
            <Text>{props.channel}</Text>
        </View>
       </View>

        </View>

    )
}
export default Card