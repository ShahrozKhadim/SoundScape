import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MenuVertical = ({width, height, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 128 512">
    <Path
      d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
      fill={color}
    />
  </Svg>
);

export default MenuVertical;
