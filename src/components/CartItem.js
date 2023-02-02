import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.item}>
        <View>
            <Text style={styles.header}>{item.name}</Text>
        </View>
        <View style={styles.detail}>
            <View>
                <Text>{item.quantity}</Text>
                <Text>{item.price}</Text>
            </View>
            <TouchOpacity onpress={() => onDelete()}>
                <Ionicons name="trash" size={24} color="red" />
            </TouchOpacity>
        </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    header: {
        fontSize: 18,
    },
    detail: {
        flex:
        flexDirection:
        flexWrap:
        alignItems:
        justifyContent:
    }
})