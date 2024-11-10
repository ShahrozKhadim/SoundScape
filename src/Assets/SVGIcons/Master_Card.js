import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../Styles';

const {white} = colors;

function Master_Card({height = '24', width = '24', color = white}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24">
      <Path fill="#FF5F00" d="M15.245 17.831h-6.49V6.168h6.49v11.663z" />
      <Path
        fill="#EB001B"
        d="M9.167 12A7.404 7.404 0 0112 6.169 7.417 7.417 0 000 12a7.417 7.417 0 0011.999 5.831A7.406 7.406 0 019.167 12z"
      />
      <Path
        fill="#F79E1B"
        d="M24 12a7.417 7.417 0 01-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0124 12z"
      />
    </Svg>
  );
}

export default Master_Card;
