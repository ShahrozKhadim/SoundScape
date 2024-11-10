import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Clear = ({width, height, color}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm3.71,13.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-2.29,2.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12,8.29,9.71A1,1,0,0,1,9.71,8.29L12,10.59l2.29-2.3a1,1,0,0,1,1.42,1.42L13.41,12Z"
        fill={color}
      />
    </Svg>
  );
};

export default Clear;
