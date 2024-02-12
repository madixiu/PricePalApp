import { View, Text,StyleSheet } from 'react-native'

const CoinsHeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
        <Text style={{flex:1,fontSize:14,fontWeight:'bold'}}>Coin</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'bold'}}>Buy</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:5}}>
        <Text style={{fontSize:14,fontWeight:'bold',}}>Sell</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:5,
    paddingHorizontal:10,
    marginHorizontal:5,
    marginVertical:5,
    backgroundColor:'gainsboro',
    borderRadius:8,
    flexDirection:'row'
  }
});
export default CoinsHeaderComponent