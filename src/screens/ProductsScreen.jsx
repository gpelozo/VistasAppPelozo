import { Button, StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'

const ProductsScreen = ({navigation, route}) => {

    const newProducts = PRODUCTS.filter(
        product => product.category === route.params.categoryId
    )

    const handleSelectedProduct = () => {
        navigation.navigate("Details", {
            name: item.name,
        })
    }

    const renderProductItem = ({item}) => (
        <ProductsItem 
        item={item}
        onSelected = {handleSelectedProduct}/>
    )
  return (
    <FlatList
    data={newProducts}
    renderItem={renderProductItem}
    keyExtractor={item => item.id}
    numColumns={2}
    />
  )
}

export default ProductsScreen

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