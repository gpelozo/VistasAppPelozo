import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrdersScreen from '../screens/OrdersScreen'

const Stack = createNativeStackNavigator()

export default CartNavigator = () => {
  return (
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
            title: "Ordenes",
          }}
          />
    </Stack.Navigator>
  )
}