import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LeftArrow = ({width, height}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M20 25a1 1 0 0 1-.71-.29l-8-8a1 1 0 0 1 0-1.42l8-8a1 1 0 1 1 1.42 1.42L13.41 16l7.3 7.29a1 1 0 0 1 0 1.42A1 1 0 0 1 20 25Z"
      />
    </Svg>
  );
};

export default LeftArrow;
