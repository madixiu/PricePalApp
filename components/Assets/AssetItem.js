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
            source={{
              uri: "../../assets/flags/" + props.Code + ".png",
              cache: "force-cache",
            }}
            style={{ width: 32, height: 32, borderRadius: 20 }}
          />
        </View>

        <View style={styles.PriceViewStyle}>
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
  symbolTextStyling: {
    fontSize: 12,
    // paddingLeft: 10,
  },
  nameTextStyling: {
    fontSize: 9,
    // paddingLeft: 10,
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
  priceTextStyling: {
    fontSize: 12,
  },
  changeTextStyling: {
    fontSize: 11,
    // paddingRight: 22,
  },
  IconViewStyle: {
    // backgroundColor: 'gainsboro',
    // height: 70,
    // flex:1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // paddingTop: 25
  },
  PriceViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ChangeViewStyle: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 5,
    paddingBottom: 5,
  },
  ChangeSubViewStyle: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "flex-end",

    paddingRight: 22,
  }
});
export default AssetItem;
