import { View, Text ,StyleSheet,Image} from 'react-native';
import color from '../misc/color';
import {FontAwesome5} from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';


export default function CryptoOverviewWidget({data,fngData}) {

  const dominance = (data) => {
    let dominance = (data.bitcoin_percentage_of_market_cap * 100).toFixed(2);
    return dominance;
  }
  const volume_24h = (data) => {
    let volume_24h = (data.total_volume_24h /1000000000).toFixed(2);
    return volume_24h;
  }
  const market_cap = (data) => {
    let market_cap = (data.total_market_cap /1000000000000).toFixed(2);
    return market_cap;
  }
  function indicator(fngData) {
    let ind = ((fngData * 166) / 100) + 17;
    return ind.toString();
  }
  
  function SvgComponent ({indicator}) {
    const svgContent = `
    <svg viewBox="0 15 200 50"
      xmlns="http://www.w3.org/2000/svg">
      <!-- Draw the bar with five colors -->
      <rect x="0" y="25" width="40" height="30" fill="${color.gauge.red}"/>
      <rect x="40" y="25" width="40" height="30" fill="${color.gauge.orange}"/>
      <rect x="80" y="25" width="40" height="30" fill="${color.gauge.yellow}"/>
      <rect x="120" y="25" width="40" height="30" fill="${color.gauge.green_light}"/>
      <rect x="160" y="25" width="40" height="30" fill="${color.gauge.green}"/> 
      <!-- //?Draw the circle as an indicator -->
      <circle id="indicator" cx="${indicator(fngData)}" cy="40" r="13" fill="#aaaa" stroke="#666" stroke-width="7"/>
    </svg>`;
  
    return <SvgXml xml={svgContent} style={{width:75,height:20,flex:1,flexWrap:'wrap'}} />;
  };
 
    return (
      <View style={styles.container}>
        <View style={[styles.box,{borderBottomStartRadius:10,borderTopStartRadius:10}]}>
          <Text style={styles.label}>ارزش کل بازار</Text>
          <Text style={styles.value}>${market_cap(data)} T</Text>
          <View style={{flexDirection:'row', justifyContent: 'sapce-between',alignItems:'center'}}>
            <Text style={styles.change}>9.82%</Text>
            <FontAwesome5 name="caret-down" size={12} color="red" />
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>حجم روزانه</Text>
          <Text style={styles.value}>${volume_24h(data)} B</Text>
          <View style={{flexDirection:'row', justifyContent: 'sapce-between',alignItems:'center'}}>
            <Text style={styles.change}>24.21%</Text>
            <FontAwesome5 name="caret-down" size={12} color="red" />
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>دامیننس</Text>
          <Text style={styles.value}>{dominance(data)}%</Text>
          <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center'}}>
          <Text style={styles.dominance}>BTC</Text>
          <Image
            source={{
              uri:
                "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
              cache: "force-cache",
            }}
            style={{ width: 10, height: 10, marginLeft: 1 }}
            />
          </View>
        </View>
        <View style={[styles.box,{borderBottomEndRadius:10,borderTopEndRadius:10}]}>
          <Text style={styles.label}>ترس و طمع</Text>
          <View style={{justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize:12,fontWeight:'bold'}}>{fngData}</Text>
            <SvgComponent style={{backgroundColor:'red'}} indicator={indicator} />
          </View>
        </View>
      </View>
    );
  
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: color.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:15,
    marginVertical:5,
  },
  box: {
    flex:1,
    minHeight:60,
    // maxHeight:60,
    elevation:2,
    backgroundColor:'white',
    justifyContent: 'space-around',
    alignItems:'center',
    marginHorizontal: 1,
  },
  label: {
    fontFamily:'vazir',
    fontSize:10,
    color:'gray'
  },
  value: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  change: {
    fontSize: 12,
    color:'red',
    marginRight: 2,
  },
  dominance: {
    fontSize: 12,
    marginRight: 2,
  }
});