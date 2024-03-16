import { View, Text, TouchableHighlight, Image } from "react-native";

import React from "react";
import { priceOptimizer } from "../misc/numberOptimizer";

const CoinItem = (props) => {
  const { ImgURL, GoldCoins, Buy, Sell } = props;

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#999"
      onPress={() => {}}
    >
      <View style={styles.container}>
        <View style={styles.iconView}>
          <Image
            source={ImgURL}
            style={{ width: 32, height: 32, borderRadius: 20,marginRight:4 }}
          />
          <Text style={styles.assetSymbolText}>{GoldCoins}</Text>
        </View>

        <View style={styles.priceView}>
          <Text style={styles.priceText}>{priceOptimizer(Buy)}</Text>
        </View>

        <View style={[styles.priceView,{alignItems:'flex-end'}]}>
          <Text style={styles.priceText}>{priceOptimizer(Sell)}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    backgroundColor: "rgb(200, 200, 200)",
    elevation: 3,
    marginHorizontal:3,
    marginVertical:2,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 9,
  },

  iconView: {
    flex: 1,
    alignItems: "center",
    flexDirection:'row',
  },

  currencyView: {
    flex: 2,
    alignItems: "center",
    // marginLeft: 4,
    justifyContent: 'center',
  },

  priceView: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },

  text: {
    fontSize: 12,
  },
  assetSymbolText: {
    fontSize: 12,
  
  },
  priceText: {
    fontSize:13,
    fontWeight: "bold",
  }
};

export default CoinItem;
