import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {colors} from '../Assets/Styles';

const {green} = colors;

const FooterLoadingIndicator = ({isLoading = true, style}) => (
  <View style={style}>
    {isLoading && <ActivityIndicator size={'small'} color={green} />}
  </View>
);
export default FooterLoadingIndicator;
