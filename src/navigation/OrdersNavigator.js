import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrdersScreen from '../screens/OrdersScreen'

const Stack = 

const CartNavigator = () => {
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

export default CartNavigator

const styles = StyleSheet.create({})