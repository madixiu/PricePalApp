import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import React from "react";
import { priceOptimizer } from "../misc/numberOptimizer";

const AssetItem = (props) => {
  return (
    <TouchableHighlight
      activeopacity={0.6}
      underlayColor="#999"
      onPress={() => {}}
    >
      <View style={styles.container}>
        <View style={styles.IconViewStyle}>

          <Image
            source={props.ImgURL}
            style={{ width: 32, height: 32, borderRadius: 20 }}
          />

          <Text style={styles.priceTextStyling}>{props.Code}</Text>
        </View>
        <View style={styles.PriceViewStyle}>
          <Text style={styles.priceTextStyling}>{props.Currency}</Text>
        </View>
        <View style={styles.PriceViewStyle}>
          <Text style={styles.priceTextStyling}>{priceOptimizer(props.Buy)}</Text>
        </View>
        <View style={styles.PriceViewStyle}>
          <Text style={styles.priceTextStyling}>{priceOptimizer(props.Sell)}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgb( 200, 200, 200)",
    // backgroundColor: 'red',
    // borderColor: "#888",
    // borderStyle: "solid",
    // borderWidth: 0.5,
    elevation: 3,
    // marginHorizontal: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 3,
    marginTop:1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // flex:1,

    // width: '100%',
    // alignSelf: 'stretch',
    // justifyContent: 'space-between',
    // alignItems: 'space-between',
    // minHeight: 74
  },


  priceTextStyling: {
    fontSize: 12,
  },

  IconViewStyle: {
    // backgroundColor: 'gainsboro',
    // height: 70,
    // flex:1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingTop: 25
  },
  PriceViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

 
});
export default AssetItem;
