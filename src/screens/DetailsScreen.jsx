import { View, Text } from 'react-native'
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