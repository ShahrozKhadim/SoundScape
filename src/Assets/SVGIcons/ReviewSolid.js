import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {colors} from '../Styles';

const {black} = colors;

const ReviewSolid = ({
  height = hp('4%'),
  width = wp('5.5%'),
  color = black,
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 384 512">
      <Path
        fill={color}
        d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-37.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 110 64 32 32 0 110-64zm113 209L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
      />
    </Svg>
  );
};

export default ReviewSolid;
