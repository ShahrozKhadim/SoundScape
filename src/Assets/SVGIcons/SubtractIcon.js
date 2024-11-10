import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SubtractIcon = ({height, width, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 24 24">
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M5 11h14v2H5z" />
  </Svg>
  // <Svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   height={height}
  //   width={width}
  //   fill="none"
  //   viewBox="0 0 20 20">
  //   <Path
  //     d="M4.167 10h11.666"
  //     stroke={color}
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     strokeWidth={1.5}
  //   />
  // </Svg>
);
export default SubtractIcon;
