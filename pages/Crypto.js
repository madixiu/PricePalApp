import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CryptoComponent from '../components/Crypto/CryptoComponent';
import CryptoItemDetail from '../components/Crypto/CryptoItemDetail';

const Stack = createNativeStackNavigator();

const List = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CryptoComponent" component={CryptoComponent} />
      <Stack.Screen name="CryptoItemDetail" component={CryptoItemDetail} />
    </Stack.Navigator>
  );
};

export default List;