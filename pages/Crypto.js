import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CryptoComponent from '../components/Crypto/CryptoComponent';
import CryptoItemDetail from '../components/Crypto/CryptoItemDetail';
import {View,Text,Image} from 'react-native';
const Stack = createStackNavigator();


const LogoTitle = (props) => {

  return (
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      {/* <Image
        source={require("./assets/logo.png")}
        style={{ width: 32,height: 32}}
        /> */}
       <Text style={{fontFamily:'vazir',fontSize:17}}>کریپتو</Text>
      </View>
  )
}
function Crypto () {



  return (
    <Stack.Navigator 
    initialRouteName='CrptoComponent'
  
    screenOptions={{ 
      headerTitleAlign:'center'
      // headerTitle: (props) => <LogoTitle {...props} />,
      // headerShadowVisible:false,
      // headerShown:false,
      // headerRight: () => (props) => <LogoTitle {...props} />,
        
    //  headerLeft: () => (
    //     <Text>Button</Text>
    // ),
     }}>

      <Stack.Screen name="CryptoComponent" component={CryptoComponent} 
      options={{
        headerTitle: (props) => <LogoTitle {...props} />,
        headerLeft: () => (
          <Image
          source={require("../assets/logo.png")}
          style={{ width: 32,height: 32,marginLeft:8}}
          />
        ),
   
      }}
      
      />
      <Stack.Screen name="CryptoItemDetail" component={CryptoItemDetail}
      />
    </Stack.Navigator>
  );
};

export default Crypto;