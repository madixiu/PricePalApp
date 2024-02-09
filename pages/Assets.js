import { View,StyleSheet } from 'react-native'
import React from 'react'
import AssetItem from '../components/Crypto/AssetItem'

const Assets = () => {
  return (
    <View style={styles.container}>
      <AssetItem />
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