import React from 'react';
import {View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Star} from '../Assets/SVGIcons';
import {colors} from '../Assets/Styles';

const {yellow} = colors;

const StarIcon = () => (
  <Star height={hp('2%')} width={wp('4.5%')} color={yellow} />
);

const StarGrid = ({numberOfStars}) => {
  const stars = Array.from({length: numberOfStars}, (_, index) => (
    <StarIcon key={index} />
  ));

  return <View style={{flexDirection: 'row'}}>{stars}</View>;
};
export default StarGrid;
