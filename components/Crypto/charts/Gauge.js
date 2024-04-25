import React from 'react';
import Svg, { G,Text,Circle} from 'react-native-svg';

const Gauge = () => {
return (
  <Svg viewBox="0 0 100 100" width={50} height={50} >
  {/* <Rect width="100%" height="100%" fill="#eee"/> */}
    <G transform="rotate(135 50 50)" fill="none" stroke-width="0">
      {/* <Circle cx="50" cy="50" r="45" stroke="#00d680" stroke-dashoffset="-120" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" />
      <Circle cx="50" cy="50" r="45" stroke="#6fed00" stroke-dashoffset="-90" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" />
      <Circle cx="50" cy="50" r="45" stroke="#eee000" stroke-dashoffset="-60" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" />
      <Circle cx="50" cy="50" r="45" stroke="#ee8c00" stroke-dashoffset="-30" stroke-dasharray="30 200" pathLength="200" stroke-linejoin="round" /> */}
      <Circle cx={50} cy={50} r={45} stroke="#f7003d" stroke-dashoffset="0" stroke-dasharray="30 200" pathLength="200"  />
      <Circle cx="8" cy="68" r="8" fill="white" stroke="black" stroke-width="1" />
      
    </G>
    <Text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="30" fill="black">78</Text>
  </Svg>


  );
};

export default Gauge;
