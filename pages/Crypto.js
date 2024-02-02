import { Text, View,StyleSheet } from 'react-native'
import React from'react'

const Crypto = () => {
  return (
    <View style={styles.container}>
      <Text>Crypto</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default Crypto