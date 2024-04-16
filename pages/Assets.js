import { View, StyleSheet, FlatList,Text } from "react-native";
import React from "react";
import AssetItem from "../components/Assets/AssetItem";
import CurrencyData from "../assets/data/Assetdata.json";
import AssetsHeaderComponent from "../components/Assets/AssetsHeaderComponent";
/**
 *
 * Assets component renders a list of currency exchange rates.
 *
 * Uses a FlatList to display AssetItem components for each currency.
 * Data comes from local JSON files CurrencyData and CoinData.
 *
 * Includes image requires for currency flag icons, bundled based on currency code.
 *
 * Refresh functionality and data fetching is currently commented out.
 */
function Assets() {
  const bundleImages = {
    USD: require("../assets/flags/USD.png"),
    EUR: require("../assets/flags/EUR.png"),
    GBP: require("../assets/flags/GBP.png"),
    CHF: require("../assets/flags/CHF.png"),
    CAD: require("../assets/flags/CAD.png"),
    AUD: require("../assets/flags/AUD.png"),
    SEK: require("../assets/flags/SEK.png"),
    NOK: require("../assets/flags/NOK.png"),
    RUB: require("../assets/flags/RUB.png"),
    THB: require("../assets/flags/THB.png"),
    SGD: require("../assets/flags/SGD.png"),
    HKD: require("../assets/flags/HKD.png"),
    AZN: require("../assets/flags/AZN.png"),
    AMD: require("../assets/flags/AMD.png"),
    DKK: require("../assets/flags/DKK.png"),
    AED: require("../assets/flags/AED.png"),
    JPY: require("../assets/flags/JPY.png"),
    TRY: require("../assets/flags/TRY.png"),
    CNY: require("../assets/flags/CNY.png"),
    SAR: require("../assets/flags/SAR.png"),
    INR: require("../assets/flags/INR.png"),
    MYR: require("../assets/flags/MYR.png"),
    AFN: require("../assets/flags/AFN.png"),
    KWD: require("../assets/flags/KWD.png"),
    IQD: require("../assets/flags/IQD.png"),
    BHD: require("../assets/flags/BHD.png"),
    OMR: require("../assets/flags/OMR.png"),
    QAR: require("../assets/flags/QAR.png"),
  };

  const getImageUrl = (code) => bundleImages[code];
  //? later on, we will have to fetch data from the API
  // const [AssetList, setAssetList] = useState([]);
  // const [Refreshing, setRefreshing] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  //? later on, we will have to fetch data from the API and reactivate it
  // function onRefresh(){
  //   setRefreshing(true);
  //   getData();
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }
  return (
    <View style={styles.container}>
     <AssetsHeaderComponent />
      <FlatList
        style={styles.flatList}
        data={CurrencyData}
        keyExtractor={(item) => item.Code}
        scrollEnabled
        renderItem={({ item }) => (
          <AssetItem
            Code={item.Code}
            Currency={item.Currency}
            Buy={item.Buy}
            Sell={item.Sell}
            ImgURL={getImageUrl(item.Code)}
          />
        )}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={Refreshing}
        //     // onRefresh={this.onRefresh.bind(this)}
        //     onRefresh={() => onRefresh()}
        //   />
        // }
      />
    </View>
  );
}

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

export default Assets;
