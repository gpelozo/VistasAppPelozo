import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
            title: "Mi Panaderia",
          }}
          />
    </Stack.Navigator>
  )
}

export default CartNavigator

const styles = StyleSheet.create({})