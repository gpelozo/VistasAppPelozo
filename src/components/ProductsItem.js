import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductsItem = () => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onSelected(item))}>
    <View style={styles.imageContainer}>
        <Image
        style={styles.image}/>
      <Text>ProductsItem</Text>
    </View>
    </TouchableOpacity>
  )
}

export default ProductsItem

const styles = StyleSheet.create({})