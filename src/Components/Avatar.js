import React from 'react';
import FastImage from 'react-native-fast-image';

import {Images} from '../Assets/Images';

const {userAvatar} = Images;

const Avatar = ({height, width, borderRadius, source = userAvatar}) => {
  const avatarSource = source?.uri ? source : userAvatar;

  return (
    <FastImage source={avatarSource} style={{height, width, borderRadius}} />
  );
};

export default Avatar;
