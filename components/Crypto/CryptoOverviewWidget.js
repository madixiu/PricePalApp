import { View, Text ,StyleSheet,Image} from 'react-native';
//// import Gauge from './charts/Gauge';
//// import gauge from '../../assets/gauge.svg';
import color from '../misc/color';
import {FontAwesome5} from '@expo/vector-icons';

// import { SvgXml } from 'react-native-svg';

// const MyComponent = (
// ) => {
//   const svgContent = `
//   <svg viewBox="0 0 100 100" width="50" height="50" >
//   <g transform="rotate(0 50 50)" fill="none" stroke-width="10">
//     <circle cx="50" cy="50" r="45" stroke="#00d680" stroke-dashoffset="-120" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" />
//     <circle cx="50" cy="50" r="45" stroke="#6fed00" stroke-dashoffset="-90" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" />
//     <circle cx="50" cy="50" r="45" stroke="#eee000" stroke-dashoffset="-60" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" />
//     <circle cx="50" cy="50" r="45" stroke="#ee8c00" stroke-dashoffset="-30" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" />
//     <circle cx="50" cy="50" r="45" stroke="#f7003d" stroke-dashoffset="0" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" />
//     <circle cx="95" cy="70" r="8" fill="white" stroke="#999" stroke-width="2" />
    
//   </g>
//   <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="15" fill="black">78</text>
// </svg>
// `;

//   return <SvgXml xml={svgContent} />;
// };


export default function CryptoOverviewWidget() {

 
    return (
      <View style={styles.container}>

          <View style={[styles.box,{borderBottomStartRadius:10,borderTopStartRadius:10}]}>
            <Text style={styles.label}>Market Cap</Text>
            <Text style={styles.value}>$2.28 T</Text>
            <View style={{flexDirection:'row', justifyContent: 'sapce-between',alignItems:'center'}}>
              <Text style={styles.change}>9.82%</Text>
              <FontAwesome5 name="caret-down" size={12} color="red" />
            </View>

          </View>
          <View style={styles.box}>
            <Text style={styles.label}>Volume</Text>
            <Text style={styles.value}>$116.17 B</Text>
            <View style={{flexDirection:'row', justifyContent: 'sapce-between',alignItems:'center'}}>
              <Text style={styles.change}>24.21%</Text>
              <FontAwesome5 name="caret-down" size={12} color="red" />
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.label}>Dominance</Text>
            <Text style={styles.value}>54.13%</Text>
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
            <Text style={styles.label}>Fear & Greed</Text>
          
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
    // minHeight:60,
    // height:'auto',
    elevation:2,
    backgroundColor:'white',
    justifyContent: 'space-around',
    alignItems:'center',
    // paddingVertical: 25,
    marginHorizontal: 1,
  },
  label: {
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