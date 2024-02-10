import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Goods = () => {
  return (
    <View style={styles.container}>
      <Text>Coming Soon!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default Goods