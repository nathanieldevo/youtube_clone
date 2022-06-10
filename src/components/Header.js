import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { View,Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Constant from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Header=()=>{
    const mycolor = "#212121"
    const navigation =useNavigation()
    return(
        <View style={{
            height:45,
            backgroundColor:"#ffffff",
            flexDirection:"row",
            justifyContent:"space-between",
            // shadowColor: mycolor,
            // shadowOffset: { width: 0, height: 0.5 },
            // shadowOpacity: 0.5,
            // shadowRadius: 1,  
            elevation:5,
            marginTop:Constant.statusBarHeight


        }}>
            <View style={{
                flexDirection:"row",
                margin:5
            }}>
            <Entypo name="youtube" size={32} color="red" style={{marginLeft:20}} />
            <Text style={{fontSize:22,
            fontWeight:"bold",
            color:mycolor,
            marginLeft:5}}>YouTube</Text>
        </View>
                
            <View style={{
                flexDirection:"row",
                justifyContent:"space-around",
                width:150,
                margin:5,

            }}>
            <FontAwesome name="video-camera" size={32} color={mycolor} />
            <Ionicons name="md-search" size={32} color={mycolor}
            onPress={()=>navigation.navigate("search")}
            />
            <MaterialIcons name="account-circle" size={32} color={mycolor}/>
            </View>
        </View>
    )
}
export default Header