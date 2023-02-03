import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation, route}) => {

    useEffect(() => {
        console.log(route.params)
    },[])
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
})