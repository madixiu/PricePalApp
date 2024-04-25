import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import data from '../assets/data/GoodsMainData.json'
import color from '../components/misc/color';
// Get the device width and height
const { width } = Dimensions.get('window');


const Goods = () => {
  return (
    <View style={styles.container}>
      {/* //!!maybe we decide to use Flatlist for this page in near future or not! */}
      {/* <FlatList
        style={{justifyContent:'space-around'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      /> */}
      <View style={{width:'100%',flexDirection:'column',alignItems:'center',marginVertical:10,padding:10}}>

        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>  
          <TouchableOpacity style={styles.card}>
              <Image
                source={{
                  uri:data[0].image,
                  cache: "force-cache",
                }}
                style={{ width: 64, height: 64}} />
              <Text style={styles.cardText}>{data[0].title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
              <Image
                source={{
                  uri:data[1].image,
                  cache: "force-cache",
                }}
                style={{ width: 64, height: 64}} />
              <Text style={styles.cardText}>{data[1].title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
              <Image
                source={{
                  uri:data[2].image,
                  cache: "force-cache",
                }}
                style={{ width: 64, height: 64}} />
              <Text style={styles.cardText}>{data[2].title}</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around',marginTop:10}}>  
          <TouchableOpacity style={styles.card}>
              <Image
                source={{
                  uri:data[3].image,
                  cache: "force-cache",
                }}
                style={{ width: 64, height: 64}} />
              <Text style={styles.cardText}>{data[3].title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
              <Image
                source={{
                  uri:data[4].image,
                  cache: "force-cache",
                }}
                style={{ width: 64, height: 64}} />
              <Text style={styles.cardText}>{data[4].title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
              <Image
                source={{
                  uri:data[5].image,
                  cache: "force-cache",
                }}
                style={{ width: 64, height: 64}} />
              <Text style={styles.cardText}>{data[5].title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: color.card,
    elevation:3,
    width:'30%',
    height: width * 0.3,
    borderRadius: 8,
    padding: 5,
    // margin: 6,
    // justifyContent: 'space-around',
    alignItems:'center',
    alignContent:'center'
  },
  cardText: {
    textAlign: 'center',
    fontSize:12,
    fontFamily:'vazir'
    // marginTop:10
  }
});
export default Goods