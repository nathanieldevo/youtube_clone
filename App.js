import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import { MaterialIcons } from '@expo/vector-icons';
import Search from './src/screens/Search';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './src/reducers/reducer';

const store = configureStore({reducer})
const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

 const RootHome =()=>{
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
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
      >      
            <Tabs.Screen  name="home" component={Home}/>
            <Tabs.Screen  name="explore" component={Explore}/>
            <Tabs.Screen  name="subscribe" component={Subscribe}/>
        </Tabs.Navigator>
   )
 }
export default function App() {
  return (
    <Provider store={store}>
<NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="rootHome" component={RootHome} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="videoplayer" component={VideoPlayer} />
    </Stack.Navigator>
  </NavigationContainer>
    </Provider>
    
  );
}