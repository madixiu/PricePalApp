import React from 'react';
import { View, ActivityIndicator,Text } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#001b2b" /> 
      <Text style={{fontFamily:'vazir',color: "#001b2b"}}>بارگزاری...</Text>
    </View>
  );
}

export default LoadingSpinner;
