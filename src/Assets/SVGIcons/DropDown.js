import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DropDown = ({height = '12', width = '6', color = '#000'}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 12 6">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M10.782.182a.74.74 0 011.033.06.713.713 0 01-.023.982l-.038.036L6.6 5.776c-.341.299-.857.299-1.198 0L.246 1.26A.714.714 0 01.185.242a.74.74 0 01.993-.093l.04.033L5.8 4.196c.114.1.286.1.4 0L10.782.182z"
      clipRule="evenodd"
    />
  </Svg>
);

export default DropDown;
