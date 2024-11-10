import React from 'react';
import {Text} from 'react-native';

const ErrorMessage = ({error, visible, style}) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={style}>{error}</Text>;
};

export default ErrorMessage;
