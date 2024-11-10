import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {colors} from '../Styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const {grey} = colors;

const BoxSolid = ({height = hp('4%'), width = wp('8%'), color = grey}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M5.75 3a1 1 0 00-.863.496l-1.75 3A1 1 0 003 7v12c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2V7a1 1 0 00-.137-.504l-1.75-3A1 1 0 0018.25 3H5.75zm.574 2h11.352l1.166 2H5.158l1.166-2zM5 9h14v10H5V9zm4 2v2h6v-2H9z"
      />
    </Svg>
  );
};

export default BoxSolid;
