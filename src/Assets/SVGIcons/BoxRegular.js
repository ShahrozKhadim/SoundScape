import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {colors} from '../Styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const {grey} = colors;

const BoxRegular = ({height = hp('4%'), width = wp('8%'), color = grey}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M4 8v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V8H4z"
        opacity="0.3"
      />
      <Path
        fill={color}
        d="M19 21H5c-1.1 0-2-.9-2-2V7c0-.2 0-.4.1-.5l1.8-3c.2-.3.5-.5.9-.5h12.5c.4 0 .7.2.9.5l1.8 3V19c0 1.1-.9 2-2 2zM5 7.3V19h14V7.3L17.7 5H6.3L5 7.3z"
      />
      <Path fill={color} d="M4 7h16v2H4zm5 4h6v2H9z" />
    </Svg>
  );
};

export default BoxRegular;
