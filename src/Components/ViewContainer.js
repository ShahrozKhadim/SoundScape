import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {colors} from '../Assets/Styles';

const {white} = colors;

const ViewContainer = ({
  children,
  statusBarBackgroundColor = 'transparent',
  statusBarStyle = 'light-content',
  style,
  props,
}) => (
  <View style={[styles.container, style]} {...props}>
    {children}
    <StatusBar
      backgroundColor={statusBarBackgroundColor}
      barStyle={statusBarStyle}
      translucent
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
  },
});

export default ViewContainer;
