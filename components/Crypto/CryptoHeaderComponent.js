import { View, Text,StyleSheet } from 'react-native'

const CryptoHeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:1,justifyContent:'center',alignItems:'flex-start',marginLeft:5}}>
        <Text style={{fontFamily:'vazir',fontSize:12}}>کوین</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'vazir',fontSize:12}}>قیمت</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:5}}>
        <Text style={{fontFamily:'vazir',fontSize:12}}>تغییرات</Text>
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
    // borderRadius:8,
    flexDirection:'row'
  }
});
export default CryptoHeaderComponent