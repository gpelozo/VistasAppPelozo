import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {useFonts} from "expo-font"
import ShopNavigator from "./src/navigation/ShopNavigator"
import {BottomTabNavigator} from './src/navigation/BottomTabNavigator'

const App = () => {
  return (
    <NavigationContainer>
    <BottomTabNavigator/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})