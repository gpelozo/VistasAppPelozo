import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={CATEGORIES}
      renderItem={CategoriesScreen}
      keyExtractor={item => item.id}
      />
    </View>
  )
}

export default CategoriesScreen

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