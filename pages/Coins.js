import { View, Text, FlatList,StyleSheet } from "react-native";
import React from "react";
import CoinsHeaderComponent from "../components/Coins/CoinsHeaderComponent";
import CoinData from "../assets/data/AssetdataCoins.json";
import CoinItem from "../components/Coins/CoinItem";
const Coins = () => {
  const bundleImages = {
    azadi: require("../assets/coins/azadi.png"),
    emami: require("../assets/coins/emami.png"),
    gerami: require("../assets/coins/gerami.png"),
  };
  const getImageUrl = (code) => bundleImages[code];
  const coins = [
    { name: "Bitcoin", buy: 10000, sell: 12000 },
    { name: "Ethereum", buy: 500, sell: 600 },
    { name: "Litecoin", buy: 50, sell: 55 },
  ];

  return (
    <View style={{ backgroundColor: "#999", flex: 1 }}>
      <CoinsHeaderComponent />
      <FlatList
        style = {styles.flatList}
        data={CoinData}
        keyExtractor={(item) => item.GoldCoins}
        renderItem={({ item }) => (
          <CoinItem
            GoldCoins={item.GoldCoins}
            Buy={item.Buy}
            Sell={item.Sell}
            ImgURL={getImageUrl(item.Icon)}
          
          />
          // <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 10}}>
          //   <Text>{item.GoldCoins}</Text>
          //   <Text>Buy: {item.Buy}</Text>
          //   <Text>Sell: {item.Sell}</Text>
          // </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999",
  },
  flatList: {
    flex: 1,
    marginHorizontal: 2,
    marginBottom: 2,
  },
});
export default Coins;
