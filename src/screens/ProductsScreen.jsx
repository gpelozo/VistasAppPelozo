import { StyleSheet, Text, View } from 'react-native'
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
    <Flatlist
    data={newProducts}
    renderItem={renderProductItem}
    keyExtractor={item => item.id}
    numColumns={2}/>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})