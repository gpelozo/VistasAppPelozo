import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"
import ShopNavigator from "./src/navigation/ShopNavigator"

export default function App() {
  const [fontsLoaded] = useFonts({
    DancingScript: require("./assets/fonts/DancingScript-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return 
    <NavigationContainer>
      <ShopNavigator/>
      <BottomTabNavigator />
    </NavigationContainer>
  
}