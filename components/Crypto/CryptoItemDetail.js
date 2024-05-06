import { View, Text,Image,StyleSheet,ScrollView } from 'react-native'
import React,{useEffect} from 'react'

import { itemDataOptimizer } from '../misc/dataOptimizer';
import { chip_color } from '../misc/dynamicStyles';
import { absNumber } from '../misc/numberOptimizer';
import { unixToDate } from '../misc/dateOptimizer';
import LineChartComponent from './charts/LineChartComponent';
import color from '../misc/color';


const CryptoItemDetail = ({navigation,route}) => {
  const data = itemDataOptimizer(route.params?.data) 

  const HeaderTitle =(props) => { 
    return(
      <View style={styles.IconViewStyle}>
        <View style={{ paddingRight: 8 }}>
          <Text style={{fontWeight:'bold'}}>{data.name}</Text>
        </View>
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
      </View>

    )
  }
  useEffect(() => {
    navigation.setOptions({
      // headerTitle:'test',
      
      // header: () => <HeaderTitle />,
      headerTitle: (props) => <HeaderTitle {...props}/>
    })
  }, [])
  

  return (

      <ScrollView>

          {/*// Price Card */}
        <View style={styles.container}>

          <View style={styles.priceCard}>
            {/* <View style={styles.IconViewStyle}>
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
            </View> */}

              <View style={styles.PriceViewStyle}>
                <View style={{justifyContent: 'flex-end',flex:2}}>
                  <Text style={styles.priceTextStyle}>${data.price}</Text>
                </View>

                <View style={{flexDirection:'row',flex:1,alignItems:'flex-end'}}>
                  <Text style={styles.lastUpdateTextStyle}>آخرین به روز رسانی</Text>
                  <Text style={[{marginLeft: 3},styles.lastUpdateTextStyle]}>{unixToDate(data.last_updated)}</Text>
                </View>
              </View>



              <View style={styles.ChangeViewStyle}>
                <View style={styles.ChangeSubViewStyle}>          
                  <View style={{justifyContent: 'center',}}>
                    <Text style={[styles.changeTextStyling,{marginRight:5}]}>ساعتی</Text>
                  </View>
                  <View style={[styles.priceChip,chip_color(data.change1h)]}>
                    {/* <Ionicons name="md-caret-down-outline" size={9} color="black" /> */}
                    <Text style={[styles.changeChipText]} >{absNumber(data.change1h)}%</Text>
                  </View>
                </View>

                <View style={styles.ChangeSubViewStyle}>
                  <View style={{justifyContent: 'center',}}>
                    <Text style={[styles.changeTextStyling,{marginRight:5}]}>روزانه</Text>
                  </View>
                  <View style={[styles.priceChip,chip_color(data.change24h)]}>
                    <Text style={[styles.changeChipText]} >{absNumber(data.change24h)}%</Text>
                  </View>
                </View>

                <View style={styles.ChangeSubViewStyle}>
                  <View style={{justifyContent: 'center',}}>
                    <Text style={[styles.changeTextStyling,{marginRight:5}]}>هفتگی</Text>
                  </View>
                  <View style={[styles.priceChip,chip_color(data.change7d)]}>
                    <Text Text style={[styles.changeChipText]} >{absNumber(data.change7d)}%</Text>
                  </View>
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
                <Text style={styles.infoLabel}>ارزش بازار</Text>
                <Text style={styles.infoValue}>${data.market_cap}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>حجم</Text>
                <Text style={styles.infoValue}>${data.volume_24h}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>عرضه در گردش</Text>
                <Text style={styles.infoValue}>${data.circulating_supply}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>کل عرضه</Text>
                <Text style={styles.infoValue}>${data.total_supply}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>حداکثر عرضه</Text>
                <Text style={styles.infoValue}>${data.max_supply}</Text>
              </View>
            </View>
           
          </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:color.card,
    elevation:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical:5,
    borderRadius:5,
  },
  PriceViewStyle: {
    justifyContent: 'space-between',
    alignItems:'flex-start'
    // flexDirection:'row',
    // paddingLeft: 20
  },
  ChangeViewStyle:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    // paddingTop: 15,
    // paddingBottom: 15,   
    // paddingVertical:3, 
    // paddingRight: 20

  },
  ChangeSubViewStyle: {
    // flex:1,
    paddingVertical:5,
    paddingHorizontal:10,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center',

  },
  changeTextStyling: {
    fontSize: 11,
    // color:'#242424',
    fontFamily:'vazir'
    
    // paddingRight: 22,
  },
  changeChipText: {
    fontSize: 11,
    fontWeight:'700',
    color: 'white'
  },
  priceTextStyle:{
    fontSize:16,
    fontWeight:'800',
  },
  lastUpdateTextStyle: {
    color:'#4c4c4c',
    fontSize:11,
    fontFamily:'vazir'
  },
  priceChip:{
    // flex:1,
    minWidth:50,
    flexDirection:'row',
    justifyContent: 'center',
    // backgroundColor:'gray',
    paddingHorizontal:10,
    paddingVertical:5,
    // marginVertical:2,
    borderRadius:8,
    alignItems: 'center',
  },
  priceCard:{
    flex:1,
    paddingVertical:1,
    paddingHorizontal:10,
    backgroundColor:color.card,
    elevation:1,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  //Info CARD
  infoCard: {
    backgroundColor:color.card,
    elevation:1,
    marginHorizontal: 10,
    marginVertical:5,
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
    fontFamily:'vazir',
    // fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  //chart CARD
  chartCard: {
    backgroundColor:color.card,
    elevation:1,
    alignItems: 'center',
    marginHorizontal: 10,
    // marginVertical:10,
    borderRadius:5,
    // paddingVertical: 5
  },

  //IconView
  IconViewStyle: {
    // flex: 1,
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