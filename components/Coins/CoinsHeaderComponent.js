import { View, Text,StyleSheet } from 'react-native'

const CoinsHeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
        <Text style={styles.text}>سکه</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.text}>خرید</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:5}}>
        <Text style={styles.text}>فروش</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical:5,
    paddingHorizontal:10,
    marginHorizontal:5,
    // marginVertical:5,
    // backgroundColor:'gainsboro',
    borderRadius:8,
    flexDirection:'row'
  },
  text: {
    fontSize:13,
    fontWeight:'bold' 
  }
});
export default CoinsHeaderComponent