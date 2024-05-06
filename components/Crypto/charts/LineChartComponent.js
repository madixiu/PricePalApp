// import { View } from 'react-native'
import {useState} from 'react'
import { Dimensions,View,Text } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import BTCdata from '../../../assets/data/mockBTC7Ddata.json'
import { getDayText } from '../../../components/misc/dateOptimizer'
import color from '../../misc/color';

const  btcDataOptimizer = (BTCdata) => {
  let data = {price:[],timestamp:[]}
  for (let item of BTCdata){
 
    data.price.push(item.rate)
    // data.timestamp.push(item.date)
    data.timestamp.push(getDayText(new Date(item.date).getDay()))

  }
  return data
}

//! CHART TOOLTIP undone! maybe get rid of it!
// const chartTooltip = ( tooltipValue, tooltipPosition) => {
//   console.log(tooltipPosition,tooltipValue);
//   return (
//     <View
//         style={{
//             // position: "absolute",
//             top: tooltipPosition.y,
//             left: tooltipPosition.x,
//             backgroundColor: 'rgba(0,0,0,0.5)',
//             padding: 10,
//             borderRadius: 10,
//             zIndex: 100,
//           }}
//     >
//       <Text style={{ color: "#fff" }}>
//         {tooltipValue}
//       </Text>
//     </View>
//     )
//     }
// * end of tooltip ******************************

const screenWidth = Dimensions.get('window').width;
function LineChartComponent () {
  const btcData = btcDataOptimizer(BTCdata)
  // console.log(btcData);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({x: 0, y: 0});
  const [tooltipValue, setTooltipValue] = useState(0);

  return (
    <View>
    <LineChart
      data={{
        // labels: ["January", "February", "March", "April", "May", "June"],
        labels: btcData.timestamp,

        datasets: [
          {
            data: btcData.price
            //! be aware of multiple chart render during the modifieng the state 
            //! consider it in terms of performance!
            //! it can be checked by random data
        // data: [
        //       Math.random() * 100,
        //       Math.random() * 100,
        //       Math.random() * 100,
        //       Math.random() * 100,
        //       Math.random() * 100,
        //       Math.random() * 100
        //     ]
          }
        ]
      }}
      onDataPointClick={({ value, dataset,x,y }) => {
        setTooltipVisible(true);
        setTooltipPosition({x,y});
        setTooltipValue(value);
        // chartTooltip(value,{x,y})
        // console.log(value, dataset,x,y);

      }}
      width={screenWidth-50} // from react-native
      height={200}
      // yAxisLabel="$"
      // yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: color.card,
        backgroundGradientFrom: color.card,
        backgroundGradientTo: color.card,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(3, 3, 3, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 6
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#000"
        }
      }}
      // bezierx
      style={{
        marginVertical: 10,
        borderRadius: 1
      }}
    />

    {
      tooltipVisible && (
        <View
          style={{
            position: "absolute",
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 10,
            borderRadius: 10
          }}
        >
          <Text style={{ color: "#fff" }}>
            {tooltipValue}
          </Text>
        </View>
      )
    }
  </View>
  )
}

export default LineChartComponent