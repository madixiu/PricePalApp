import { View, Text,Button,Image,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

import { itemDataOptimizer } from '../misc/dataOptimizer';
import { chip_color } from '../misc/dynamicStyles';
import { absNumber } from '../misc/numberOptimizer';
import { unixToDate } from '../misc/dateOptimizer';
import LineChartComponent from './charts/LineChartComponent';
function backBotton(navigation){
  // console.log(navigation,route);
  navigation.navigate('CryptoComponent');
}


const CryptoItemDetail = ({navigation,route}) => {
  const data = itemDataOptimizer(route.params?.data) 

  return (
    // <View style={{flex:1,backgroundColor:'#999'}}>
      // <Text>{route.params?.data.symbol}</Text>
      // <Text>{route.params?.data.name }</Text>
      // <Text>{route.params?.data.rank }</Text>
      // <Text>{route.params?.data.price }</Text>
      // <Text>{route.params?.data.change24h }</Text>
      // <Text>{route.params?.data.change1h }</Text>
      // <Text>{route.params?.data.change7d }</Text>
      // <Text>{route.params?.data.volume_24h }</Text>
      // <Text>{route.params?.data.market_cap }</Text>
      // <Text>{route.params?.data.circulating_supply }</Text>
      // <Text>{route.params?.data.total_supply }</Text>
      // <Text>{route.params?.data.max_supply }</Text>
      // <Text>{route.params?.data.last_updated }</Text>


      <ScrollView style={{backgroundColor:"#999"}}>

          {/*// Price Card */}
        <View style={styles.container}>

          <View style={styles.PriceViewStyle}>
            <View style={styles.IconViewStyle}>
            {/* <Image source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/'+iconIDfinder(props.symbol)+'.png', cache: 'force-cache'}} 
              style={{ width: 32, height: 32,marginLeft: 10, }}
            /> */}
            <Image
              source={{
                uri:
                  "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/" +
                  data.symbol.toLowerCase() +
                  ".png",
                cache: "force-cache",
              }}
              style={{ width: 32, height: 32 }}
            />
            <View style={{ paddingLeft: 8 }}>
              <Text style={styles.nameTextStyling}>{data.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.rankTextView}>
                  <Text style={styles.rankTextStyling}>{data.rank}</Text>
                </View>
                <Text style={styles.symbolTextStyling}>{data.symbol}</Text>
              </View>
            </View>
            </View>
              <Text style={styles.priceTextStyle}>${data.price}</Text>
              <View style={{flexDirection:'row',paddingVertical:5}}>
                <Text style={styles.lastUpdateTextStyle}>Last Update</Text>
                <Text style={[{marginLeft: 3},styles.lastUpdateTextStyle]}>{unixToDate(data.last_updated)}</Text>
              </View>
            </View>

            <View style={styles.ChangeViewStyle}>
              <View style={styles.ChangeSubViewStyle}>          
                <View style={[styles.priceChip,chip_color(data.change1h)]}>
                  {/* <Ionicons name="md-caret-down-outline" size={9} color="black" /> */}
                  <Text style={[styles.changeChipText]} >{absNumber(data.change1h)}%</Text>
                </View>
                <View style={{justifyContent: 'center',}}>
                  <Text style={[styles.changeTextStyling,{marginLeft:5}]}>1H</Text>
                </View>
              </View>

              <View style={styles.ChangeSubViewStyle}>
                <View style={[styles.priceChip,chip_color(data.change24h)]}>
                  <Text style={[styles.changeChipText]} >{absNumber(data.change24h)}%</Text>
                </View>
                <View style={{justifyContent: 'center',}}>
                  <Text style={[styles.changeTextStyling,{marginLeft:5}]}>1D</Text>
                </View>
              </View>

              <View style={styles.ChangeSubViewStyle}>
                <View style={[styles.priceChip,chip_color(data.change7d)]}>
                  <Text Text style={[styles.changeChipText]} >{absNumber(data.change7d)}%</Text>
                </View>
                <View style={{justifyContent: 'center',}}>
                  <Text style={[styles.changeTextStyling,{marginLeft:5}]}>7D</Text>
                </View>
              </View>
            </View>
          </View>

            <View style={styles.chartCard}>
              <LineChartComponent />
            </View>
          {/*// Info Card */}
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Market Cap</Text>
                <Text style={styles.infoValue}>${data.market_cap}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Volume</Text>
                <Text style={styles.infoValue}>${data.volume_24h}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Circulating Supply</Text>
                <Text style={styles.infoValue}>${data.circulating_supply}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Max Supply</Text>
                <Text style={styles.infoValue}>${data.max_supply}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Total Supply</Text>
                <Text style={styles.infoValue}>${data.total_supply}</Text>
              </View>
            </View>
            <Button
                onPress={() => {backBotton(navigation,route)}}
                title="Back"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
          </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#c8c8c8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical:10,
    borderRadius:5,
  },
  PriceViewStyle: {
    justifyContent: 'center',
    paddingLeft: 20
  },
  ChangeViewStyle:{
    justifyContent: 'flex-end',
    // paddingTop: 15,
    // paddingBottom: 15,   
    paddingVertical:3, 
    paddingRight: 20

  },
  ChangeSubViewStyle: {
    // flex:1,
    // paddingVertical:5,

    flexDirection:'row',
    justifyContent: 'center',

  },
  changeTextStyling: {
    fontSize: 9,
    color:'#242424'
    
    // paddingRight: 22,
  },
  changeChipText: {
    fontSize: 9,
    color: 'white'
  },
  priceTextStyle:{
    fontSize:16,
    fontWeight:'800',
  },
  lastUpdateTextStyle: {
    color:'#4c4c4c',
    fontSize:11,
  },
  priceChip:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    // backgroundColor:'gray',
    paddingHorizontal:2,
    paddingVertical:5,
    marginVertical:2,
    borderRadius:5,
    alignItems: 'center',
  },

  //Info CARD
  infoCard: {
    backgroundColor:'#c8c8c8',
    marginHorizontal: 10,
    marginVertical:10,
    borderRadius:5,
    paddingVertical: 5

  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginVertical: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 14,
    marginVertical: 5,
    // marginBottom: 10,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  //chart CARD
  chartCard: {
    backgroundColor:'#c8c8c8',
    alignItems: 'center',
    marginHorizontal: 10,
    // marginVertical:10,
    borderRadius:5,
    // paddingVertical: 5
  },

  //IconView
  IconViewStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  nameTextStyling: {
    fontSize: 9,
    color: "#666",
  },
  rankTextStyling: {
    fontSize: 7,
    color: "white",
  },
  rankTextView: {
    backgroundColor: "#999999",
    borderRadius: 2,
    padding: 2,
    paddingHorizontal: 5,
    marginRight: 2,
  },
  symbolTextStyling: {
    fontSize: 12,
  }
});

export default CryptoItemDetail