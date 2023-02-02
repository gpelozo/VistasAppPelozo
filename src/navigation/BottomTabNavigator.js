import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator"

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName="ShopTab" 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTabs.Screen name="ShopTab" component={ShopNavigator}
            options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <Ionicons name="home" size={20} color="black" />
                        <Text>Tienda</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name="CartTab" component={CartNavigator}
            options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <Ionicons name="home" size={20} color="black" />
                        <Text>Carrito</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name="CartTab" component={CartNavigator}
            options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <Ionicons name="home" size={20} color="black" />
                        <Text>Ordenes</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name="CartTab" component={CartNavigator} />
        </BottomTabs.Navigator>
    )
}

const Styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    icon: {
        flex:"1",
        justifyContent:"center",
    }
})