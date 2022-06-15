import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import { MaterialIcons } from '@expo/vector-icons';
import Search from './src/screens/Search';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import {Provider, useSelector} from 'react-redux'
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import reducer from './src/reducers/reducer';
import themeReducer from './src/reducers/themeReducer';

const customDarktheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red",
  }
}
const rootReducer = combineReducers({
  cardData : reducer,
  myDarkMode : themeReducer
})
const store = configureStore(rootReducer)
const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

 const RootHome =()=>{
  const {colors}=useTheme()
   return(
      <Tabs.Navigator 
         screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home'
          } else if (route.name === 'explore') {
            iconName = 'explore';
          }
          else if (route.name === 'subscribe') {
            iconName = 'subscriptions'
          }

          // You can return any component that you like here!
         return <MaterialIcons name={iconName} size={32} color={color}  />
        },
        tabBarActiveTintColor: colors.tabIcon,
        tabBarInactiveTintColor: "gray",
      })
    }
      >      
            <Tabs.Screen options={{headerShown: false}}  name="home" component={Home}/>
            <Tabs.Screen options={{headerShown: false}}  name="explore" component={Explore}/>
            <Tabs.Screen options={{headerShown: false}}  name="subscribe" component={Subscribe}/>
        </Tabs.Navigator>
   )
 }
export default()=>{
return(
  <Provider store={store}>
  <Navigation />
</Provider>
)
}

  export  function Navigation() {
  let currenttheme = useSelector(State=>{
    return State.myDarkMode
  })
  return (
    <Provider store={store}>
<NavigationContainer
theme={currenttheme? customDarktheme:customDefaultTheme}
>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}
 headerMode="none">
      <Stack.Screen name="rootHome" options={{headerShown: false}} component={RootHome} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="videoplayer" component={VideoPlayer} />
    </Stack.Navigator>
  </NavigationContainer>
    </Provider>
    
  );
}