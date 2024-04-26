// import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,RefreshControl, TouchableHighlight} from 'react-native'
import { listingDataOptimizer } from '../misc/dataOptimizer';
import CryptoItem from './CryptoItem';
import CryptoHeaderComponent from './CryptoHeaderComponent';
import LoadingSpinner from '../LoadingSpinner';
import CryptoOverviewWidget from './CryptoOverviewWidget';
import color from '../misc/color';


export default function CryptoComponent(props) {
  const [CryptoList, setCryptoList] = useState([]);
  const [Refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  
  
  function onRefresh(){
    setRefreshing(true);
    getData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }
  function errorHandler(){
    setError(false);
    setLoading(true);
    getData();
  }
async function getData() {
  try {
    const response = await fetch('https://api.alternative.me/v2/ticker/?limit=50');
    const data = await response.json();
    let dataOPed = listingDataOptimizer(data.data);
    setCryptoList(dataOPed);
    setLoading(false);
  } catch (err) {
    setLoading(false);
    setError(true);
    setCryptoList(null);
  }
}

//? Axios call disabled for now!
  // function getData() {
  //   axios.get('https://api.alternative.me/v2/ticker/?limit=10').then (response => {
  //     let data = response.data.data;
  //     let dataOPed = listingDataOptimizer(data)
  //     setCryptoList(dataOPed)
  //     setLoading(false); 
  //   }).catch((err) => {
  //     setLoading(false);
  //     setError(true);
  //     setCryptoList(null);
  //   });
  // }

  useEffect(() => {
      getData();
  }, []);

  if (loading) 
  return (
  // <View style={{alignItems: 'center',flex:1,justifyContent: 'center',backgroundColor: '#999'}}>
  //   <Text>Loading...</Text>  
  // </View>
  <LoadingSpinner />
  )
  else if (error)
  return(
    <View style={{alignItems: 'center',flex:1,justifyContent: 'center',backgroundColor: '#999'}}>
      
      <TouchableHighlight style={{borderWidth:2,borderColor:'white',padding:10,borderRadius:8}} onPress={() => errorHandler()}>
        <Text style={{color:'white'}}>Try Again!</Text>
      </TouchableHighlight>  
    </View>
  )
  else 
  return (
    <View style={{flex:1,backgroundColor:color.background}}>
      <CryptoOverviewWidget />
      <CryptoHeaderComponent />
        <View style={styles.listView}>
          
          <FlatList
            data={CryptoList}
            renderItem={({ item }) => {
              return   <CryptoItem navigation={props.navigation} name={item.name} 
                          symbol={item.symbol} rank={item.rank} price={item.price} 
                          change24h={item.percent_change_24h} change1h={item.percent_change_1h} 
                          change7d={item.percent_change_7d}
                          volume_24h={item.volume_24h}
                          market_cap={item.market_cap}
                          circulating_supply = {item.circulating_supply}
                          total_supply = {item.total_supply}
                          max_supply = {item.max_supply}
                          last_updated = {item.last_updated}

                          />
            }}
            refreshControl={
              <RefreshControl 
                refreshing={Refreshing}
                // onRefresh={this.onRefresh.bind(this)}
                onRefresh={() => onRefresh()}
              />
            }
    
          />  
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  listView: {
    flex:1,
    marginHorizontal: 5,
    // marginTop: 15,
    // paddingBottom:20,
    // paddingTop: 20,
  },
  listHeader:{
    // flex:1,
    flexDirection:'row',
    // justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    // paddingBottom:1
  }
 
});