import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Star = ({height, width, color}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 1 11 11">
      <Path
        d="M5.50002 1.41666L6.91627 4.28583L10.0834 4.74875L7.79169 6.98083L8.33252 10.1342L5.50002 8.64458L2.66752 10.1342L3.20835 6.98083L0.916687 4.74875L4.08377 4.28583L5.50002 1.41666Z"
        fill={color}
      />
    </Svg>
  );
};

export default Star;
