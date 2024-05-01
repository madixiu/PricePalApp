import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import React from "react";
import { caret_color, percent_text_color } from "../misc/dynamicStyles";
import color from "../misc/color";
import { FontAwesome5 } from '@expo/vector-icons';

const onItemClick = (data, navigation) => {
  navigation.navigate('CryptoItemDetail',{data: data})
  return;
};

const CryptoItem = (props) => {
  const passingData = {
    symbol: props.symbol,
    name: props.name,
    rank: props.rank,
    price: props.price,
    change24h: props.change24h,
    change1h: props.change1h,
    change7d: props.change7d,
    volume_24h: props.volume_24h,
    market_cap: props.market_cap,
    circulating_supply: props.circulating_supply,
    total_supply: props.total_supply,
    max_supply: props.max_supply,
    last_updated: props.last_updated,
  };
 
  // arrow function that calculates the change based on a filter 
  function changeCalculator () {
    if (props.FilterChange == 'ساعتی')
    return props.change1h;
    else if (props.FilterChange == 'هفتگی')
    return props.change7d
    else
    return props.change24h;
  }
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={color.background}
      onPress={() => onItemClick(passingData, props.navigation)}
    >
      <View style={styles.container}>
        <View style={styles.IconViewStyle}>
          {/* <Image source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/'+iconIDfinder(props.symbol)+'.png', cache: 'force-cache'}} 
            style={{ width: 32, height: 32,marginLeft: 10, }}
          /> */}
          <Image
            source={{
              uri:
                "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/" +
                props.symbol.toLowerCase() +
                ".png",
              cache: "force-cache",
            }}
            style={{ width: 32, height: 32, marginLeft: 10 }}
          />
          <View style={{ paddingLeft: 8 }}>
            <Text style={styles.nameTextStyling}>{props.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.rankTextView}>
                <Text style={styles.rankTextStyling}>{props.rank}</Text>
              </View>
              <Text style={styles.symbolTextStyling}>{props.symbol}</Text>
            </View>
          </View>
        </View>

        <View style={styles.PriceViewStyle}>
          <Text style={styles.priceTextStyling}>${props.price}</Text>
        </View>

        <View style={styles.ChangeViewStyle}>
            <Text style={[
                styles.changeTextStyling,
                percent_text_color(changeCalculator()),
              ]}>{Math.abs(changeCalculator())}%</Text>
          {(changeCalculator() < 0 || changeCalculator() > 0)? (<FontAwesome5 style={{marginLeft:3}} name={props.change1h < 0 ? "caret-down" : "caret-up"} 
          size={12} color={caret_color(props.change1h)}  />) : null}
        </View>
        {/* <View style={styles.ChangeViewStyle}>
          <View style={styles.ChangeSubViewStyle}>
            <Text
              style={[
                styles.changeTextStyling,
                percent_text_color(props.change1h),
              ]}
            >
              {props.change1h}%
            </Text>
            <Text style={[styles.changeTextStyling, { marginLeft: 5 }]}>
              1H
            </Text>
          </View>

          <View style={styles.ChangeSubViewStyle}>
            <Text
              style={[
                styles.changeTextStyling,
                percent_text_color(props.change24h),
              ]}
            >
              {props.change24h}%
            </Text>
            <Text style={[styles.changeTextStyling, { marginLeft: 5 }]}>
              1D
            </Text>
          </View>

          <View style={styles.ChangeSubViewStyle}>
            <Text
              style={[
                styles.changeTextStyling,
                percent_text_color(props.change7d),
              ]}
            >
              {props.change7d}%
            </Text>
            <Text style={[styles.changeTextStyling, { marginLeft: 5 }]}>
              7D
            </Text>
          </View>
        </View> */}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.card,
    elevation: 1,
    // marginBottom: 3,
    // marginTop: 1,
    marginHorizontal:3,
    marginVertical:2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  symbolTextStyling: {
    fontSize: 12,
  },
  nameTextStyling: {
    fontSize: 9,
    color: color.text_secondary,
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
  priceTextStyling: {
    fontSize: 13,
    fontWeight: "bold",
  },
  changeTextStyling: {
    fontSize: 12,
  },
  IconViewStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  PriceViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ChangeViewStyle: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "flex-end",
    alignItems:'center',
   paddingVertical:15,
   paddingHorizontal:5
  },
  ChangeSubViewStyle: {
    flexDirection: "row",
    justifyContent: "flex-end",

    paddingRight: 22,
  }
});
export default CryptoItem;