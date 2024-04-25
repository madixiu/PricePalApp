// AssetsHeaderComponent.js

import { View, Text,StyleSheet } from 'react-native'; 
const AssetsHeaderComponent = () => {

  return (
    <View style={styles.container}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'bold'}}>ارز</Text>
      </View>
      <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'bold'}}>واحد</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'bold',}}>خرید</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'bold',}}>فروش</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // paddingVertical:5,
    paddingHorizontal:5,
    // marginHorizontal:5,
    // marginVertical:5,
    // backgroundColor:'gainsboro',
    // borderRadius:8,
    flexDirection:'row'
  },
  
});
export default AssetsHeaderComponent;
