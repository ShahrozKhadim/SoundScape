import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Warning = ({height, width, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 64 512">
    <Path
      d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v256c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
      fill={color}
    />
  </Svg>
);
export default Warning;
