import { Text, View,StyleSheet } from 'react-native'
import React from 'react'

const Assets = () => {
  return (
    <View style={styles.container}>
      <Text>Assets</Text>
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
export default Assets