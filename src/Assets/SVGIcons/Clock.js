import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

const Clock = ({height, width, color}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 512 512">
      <Path
        d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0zm232-136v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
        fill={color}
      />
    </Svg>
    // <Svg viewBox="0 0 20 20" width={width} height={height} fill="none">
    //   <G
    //     stroke={color}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={1.5}
    //     clipPath="url(#a)">
    //     <Path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z" />
    //     <Path d="M10 5v5l3.333 1.667" />
    //   </G>
    //   <Defs>
    //     <ClipPath id="a">
    //       <Path fill={color} d="M0 0h20v20H0z" />
    //     </ClipPath>
    //   </Defs>
    // </Svg>
  );
};
export default Clock;
