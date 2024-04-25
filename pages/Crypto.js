import React from 'react';
import { I18nManager,Text,View } from'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CryptoComponent from '../components/Crypto/CryptoComponent';
import CryptoItemDetail from '../components/Crypto/CryptoItemDetail';
I18nManager.allowRTL(true)
I18nManager.forceRTL(true);
const Stack = createNativeStackNavigator();


const LogoTitle = (props) => {
// I18nManager.allowRTL(true)
// I18nManager.forceRTL(true);

  return (
    <View style={{flexDirection:'row',direction:'rtl',justifyContent:'center',alignItems:'center'}}>
      {/* <Image
        source={require("./assets/logo.png")}
        style={{ width: 32,height: 32}}
        /> */}
        <Text style={{textAlign: 'left'}}>{props.children}</Text>
      </View>
  )
}
function Crypto () {


  I18nManager.allowRTL(true)
  I18nManager.forceRTL(true);

  return (
    <Stack.Navigator 
    initialRouteName='CrptoComponent'
  
    screenOptions={{ 
      headerStyle: {flexDirection: 'row-reverse',justifyContent:'center',paddingVertical:10,layoutDirection:'rtl'},
      // headerTitle: (props) => <LogoTitle {...props} />,
      // headerShadowVisible:false,
      // headerShown:false,
      headerRight: () => (props) => <LogoTitle {...props} />,
        
     headerLeft: () => (
        <Text>Button</Text>
    ),
     }}>

      <Stack.Screen name="CryptoComponent" component={CryptoComponent} />
      <Stack.Screen name="CryptoItemDetail" component={CryptoItemDetail} />
    </Stack.Navigator>
  );
};

export default Crypto;