import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {
    const CartScreen = () => {
        const total = 120

        const handleConfirmCart = () => {
            console.log("Confirmar Carrito")
        }

        const handleDeleteItem = () => {
            console.log("borrar elemento")
        }

        const renderCartItem = ({item}) => (
            <CartItem item={item} onDelete={() => console.log("borrar elemento")}/>
        )
    }
  return (
    <View style={styles.container}>
      <FlatList
      data={CART}
      keyExtractor={(item) => item.id}
      renderItem={renderCartItem}
      />
    <View style={styles.footer}>
        <TouchableOpacity styles={styles.confirm}>
            <Text>Confirmar</Text>
            <View style={styles.total}>
            <Text styles={style.text}>{total}</Text>
            <Text>{total}</Text>
            </View>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: "blue", 
        paddingBottom: 120,
    },
    list: {
        flex: 1,
    },
    footer: {
        padding: 12,
        borderTopColor: "#ccc",
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

})