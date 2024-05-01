// import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,RefreshControl, TouchableHighlight,Modal,TouchableOpacity} from 'react-native'
import { filterArray, listingDataOptimizer } from '../misc/dataOptimizer';
import CryptoItem from './CryptoItem';
import CryptoHeaderComponent from './CryptoHeaderComponent';
import LoadingSpinner from '../LoadingSpinner';
import CryptoOverviewWidget from './CryptoOverviewWidget';
import color from '../misc/color';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function FilteringComponent({ Currency, setCurrency,modalTopVisible,setModalTopVisible,FilterTop,setModalChangeVisible,FilterChange }) {
  function CurrencyHandler () {
   if (Currency  == 'USD')
    setCurrency('Toman')
  else
    setCurrency('USD')
  }
  return(
    <View style={{flexDirection: 'row',justifyContent:'flex-start',alignItems:'center',paddingHorizontal:10}}>
      <TouchableOpacity style={styles.filterChip} onPress={() =>{CurrencyHandler() }}>

        <Text style={[styles.filterChipText,{fontWeight: Currency == 'USD' ? 'bold' : 'normal'}]}>USD</Text>
        <Text>/</Text>
        <Text style={{fontWeight: Currency === 'Toman' ? 'bold' : 'normal'}}>تومان</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterChip} onPress={()=> {setModalTopVisible(true)}}>
        <Text style={[styles.filterChipText,{marginRight:2}]}>{FilterTop}</Text>
        <Text style={styles.filterChipText}>برترین</Text>
        <FontAwesome5 style={{marginLeft:5}} name="angle-down" size={12} color={color.text_secondary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterChip} onPress={()=>{setModalChangeVisible(true)}}>
        <Text style={styles.filterChipText}>{FilterChange}</Text>
        <FontAwesome5 style={{marginLeft:5}} name="angle-down" size={12} color={color.text_secondary} />
      </TouchableOpacity>
    </View>
  );
}
export default function CryptoComponent(props) {
  const [CryptoList, setCryptoList] = useState([]);
  const [FilteredCryptoList, setFilteredCryptoList] = useState([]);
  const [Refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [Currency,setCurrency] = useState('USD')
  const [modalTopVisible,setModalTopVisible] = useState(false);
  const [modalChangeVisible,setModalChangeVisible] = useState(false)
  const [FilterTop,setFilterTop] = useState('100');
  const [FilterChange,setFilterChange] = useState('ساعتی')

  function filterTopHandler(value){
    setFilterTop(value);
    setModalTopVisible(false);
    let data = filterArray(CryptoList,value)
    setTimeout(() => {
      setLoading(true);
      setFilteredCryptoList(data);
      setLoading(false);
    }, 2000);
    // setFilteredCryptoList(data);
    // setRefreshing(true)
    // onRefresh()
  }
  function filterChangeHandler(value) {
    setFilterChange(value)
    setModalChangeVisible(false)
    onRefresh()

  }
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

    setCryptoList(null);
    setLoading(true);
    var data = null;
    const response = await fetch('https://api.alternative.me/v2/ticker/?limit=300');
    data = await response.json();
    let dataOPed = listingDataOptimizer(data.data);
    setCryptoList(dataOPed);
    setFilteredCryptoList(filterArray(dataOPed,FilterTop))
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
      <FilteringComponent Currency={Currency} setCurrency={setCurrency} modalTopVisible={modalTopVisible} setModalTopVisible={setModalTopVisible} FilterTop={FilterTop} setFilterTop={setFilterTop} FilterChange={FilterChange} setModalChangeVisible={setModalChangeVisible} />  
      <CryptoHeaderComponent />
        <View style={styles.listView}>
          
          <FlatList
            removeClippedSubviews
            data={FilteredCryptoList}
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
                          FilterChange={FilterChange}
                          />
            }}
            refreshControl={
              <RefreshControl 
                refreshing={Refreshing}
                onRefresh={() => onRefresh()}
              />
            }
    
          />  
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTopVisible}>
          <View style={styles.modalContainer}  >
            <View style={styles.modalView} >
              <Text style={styles.modalHeaderText}>بازه برترین ها</Text>

              <View style={{backgroundColor:'#999', paddingBottom:1}}></View>
              <TouchableOpacity style={styles.ModalItem} onPress={()=>{filterTopHandler('100')}}>
                <Text style={styles.ModalItemText}>۱۰۰ برترین</Text>             
                { FilterTop == '100' ? (<Ionicons name="checkmark-sharp" size={16} color="black" />) : null}
              </TouchableOpacity>
              <View style={{backgroundColor:'#999', paddingBottom:1}}></View>

              <TouchableOpacity style={styles.ModalItem} onPress={()=>{filterTopHandler('200')}} >
                <Text style={styles.ModalItemText}>۲۰۰ برترین</Text>
                { FilterTop == '200' ? (<Ionicons name="checkmark-sharp" size={16} color="black" />) : null}

              </TouchableOpacity>
              <View style={{backgroundColor:'#999', paddingBottom:1}}></View>
              
              <TouchableOpacity style={styles.ModalItem} onPress={()=>{filterTopHandler('300')}} >
                <Text style={styles.ModalItemText}>۳۰۰ برترین</Text>
                { FilterTop == '300' ? (<Ionicons name="checkmark-sharp" size={16} color="black" />) : null}

              </TouchableOpacity>
              <View style={{backgroundColor:'#999', paddingBottom:1}}></View>


            </View>

          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalChangeVisible}>
          <View style={styles.modalContainer}  >
            <View style={styles.modalView} >
              <Text style={styles.modalHeaderText}>تغییرات قیمت</Text>

              <View style={{backgroundColor:'#999', paddingBottom:1}}></View>
              <TouchableOpacity style={styles.ModalItem} onPress={()=>{filterChangeHandler('ساعتی')}}>
                <Text style={styles.ModalItemText}>ساعتی</Text>             
                { FilterChange == 'ساعتی' ? (<Ionicons name="checkmark-sharp" size={16} color="black" />) : null}
              </TouchableOpacity>
              <View style={{backgroundColor:'#999', paddingBottom:1}}></View>

              <TouchableOpacity style={styles.ModalItem} onPress={()=>{filterChangeHandler('روزانه')}} >
                <Text style={styles.ModalItemText}>روزانه</Text>
                { FilterChange == 'روزانه' ? (<Ionicons name="checkmark-sharp" size={16} color="black" />) : null}

              </TouchableOpacity>
              <View style={{backgroundColor:'#999', paddingBottom:1}}></View>
              
              <TouchableOpacity style={styles.ModalItem} onPress={()=>{filterChangeHandler('هفتگی')}} >
                <Text style={styles.ModalItemText}>هفتگی</Text>
                { FilterChange == 'هفتگی' ? (<Ionicons name="checkmark-sharp" size={16} color="black" />) : null}

              </TouchableOpacity>
              <View style={{backgroundColor:'#999', paddingBottom:1}}></View>


            </View>

          </View>
        </Modal>
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
  },
  filterChip: {
    backgroundColor:color.card_alternative,
    elevation:1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    paddingVertical:5,
    paddingHorizontal:10,
    marginHorizontal: 5,
  },
  filterChipText: {
    fontFamily:'vazir',
    fontSize:11
  },
  centeredView: {
    flex: 1,
    backgroundColor:'red',
     justifyContent: 'flex-end',
    alignItems: 'center',
    height:'30%'
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    width:'100%',
    height:'30%',
    justifyContent:'flex-start',
    backgroundColor: 'white',
    // alignSelf: 'center',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalContainer: {
    
      // position: 'absolute',
      // bottom: 0,
      flex:1,
      justifyContent:'flex-end',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 130, 0.2)',
      shadowOpacity: 0.25,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      
      
    },
    modalView: {
      backgroundColor:'#fff',
      opacity:1,
      borderRadius:16,
    
  },
  modalHeaderText: {
    fontSize: 14,
    // fontWeight: 'bold',
    // color: '#fff',
    fontFamily:'vazir',
    marginBottom: 15,
    marginTop:10,
    textAlign: 'center',
  },
  ModalItem: {
    // padding: 20,
    paddingHorizontal:10,
    paddingVertical:15,
    marginBottom:1,
    backgroundColor:'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // opacity:1
  },
  ModalItemText: {
    fontFamily:'vazir',
    fontSize:13,
    color:color.text,
    // opacity:1
  }
});