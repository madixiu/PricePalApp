
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import AssetItem from "../components/Assets/AssetItem";
import CurrencyData from "../assets/data/Assetdata.json";
import CoinData from "../assets/data/AssetdataCoins.json";

function Assets() {
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
      {/* <AssetItem CurrencyData={CurrencyData} CoinData={CoinData} /> */}

      <ScrollView style={styles.listView}>
        {/* <View style={styles.listView}> */}
          <FlatList
            data={CurrencyData}
            renderItem={({ item }) => {
              return (
                <AssetItem
                  Code={item.Code}
                  Currency={item.Currency}
                  Buy={item.Buy}
                  Sell={item.Sell}
                />
              );
            }}
            // refreshControl={
            //   <RefreshControl
            //     refreshing={Refreshing}
            //     // onRefresh={this.onRefresh.bind(this)}
            //     onRefresh={() => onRefresh()}
            //   />
            // }
          />
        {/* </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999",
    // marginTop: 10,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  listView: {
    flex: 1,
   marginHorizontal: 2,
   marginVertical:2,
  }
});

export default Assets;
