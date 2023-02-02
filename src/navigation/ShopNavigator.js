import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "../screens/CategoriesScreen"
import ProductScreen from "../screens/ProductsScreen"
import DetailsScreen from "../screens/DetailsScreen"

import { COLORS } from "../constants/colors"

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
            headerShadowVisible: false,
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }}
        >
          <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Mi Panaderia",
          }}
          />
          <Stack.Screen
          name="Products"
          component={CategoriesScreen}
          options={({route}) => ({
            title: route.params.title,
          })}
          />
          <Stack.Screen
          name="Details"
          component={CategoriesScreen}
          options={({route}) => ({
            title: route.params.name,
          })}
          /> 
        </Stack.Navigator>
        </NavigationContainer>
  )
}
