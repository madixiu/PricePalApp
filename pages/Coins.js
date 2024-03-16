import { View, FlatList,StyleSheet } from "react-native";
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
