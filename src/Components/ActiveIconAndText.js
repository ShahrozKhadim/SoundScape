import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, smallTextStyle} from '../Assets/Styles';

const {green, grey} = colors;

const ActiveIconAndText = ({
  isActive,
  text,
  SolidIcon,
  RegularIcon,
  textStyle,
  containerStyle,
}) => (
  <View style={[styles.container, containerStyle]}>
    {isActive ? <SolidIcon color={green} /> : <RegularIcon />}
    <Text style={[smallTextStyle, {color: isActive ? green : grey}, textStyle]}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default ActiveIconAndText;
