import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PlusIcon = ({height, width, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    height={height}
    width={width}
    viewBox="0 0 50 50">
    <Path fill="none" d="M0 0h50v50H0z" />
    <Path
      fill="none"
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M9 25h32M25 9v32"
    />
  </Svg>
);
export default PlusIcon;
