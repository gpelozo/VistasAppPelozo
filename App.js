import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"

export default function App() {
  const [fontsLoaded] = useFonts({
    DancingSCript: require("./src/assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}