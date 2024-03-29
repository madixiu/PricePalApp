// AssetsHeaderComponent.js

import { View, Text } from 'react-native'; 

const AssetsHeaderComponent = () => {

  return (
    <View style={{paddingVertical:5,paddingHorizontal:10,marginHorizontal:5,marginVertical:5,backgroundColor:'gainsboro',borderRadius:8,flexDirection:'row'}}>
      <View>
        <Text style={{fontSize:14,fontWeight:'bold'}}>Assets</Text>
      </View>
      <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'bold'}}>Currency</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'bold',}}>Buy</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'bold',}}>Sell</Text>
      </View>
    </View>
  );
}

export default AssetsHeaderComponent;
