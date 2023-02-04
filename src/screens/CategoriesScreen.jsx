import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoriesItem from '../components/CategoriesItem'
import {CATEGORIES} from "../data/categories"


const CategoriesScreen = ({navigation}) => {
  const renderCategoriesItem = ({ item }) => (
    <View>
      <CategoriesItem item={item} onSelected={() => console.log(item)}/>)
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList
      data={CATEGORIES}
      renderItem={renderCategoriesItem}
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
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
})