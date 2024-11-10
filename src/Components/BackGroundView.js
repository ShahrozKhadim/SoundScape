import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import FastImage from 'react-native-fast-image';

import {authStyles} from '../Assets/Styles';
import {Images} from '../Assets/Images';

const {statusBarContent} = authStyles;
const {backgroundImage} = Images;

const BackGroundView = ({children}) => {
  return (
    <>
      <FastImage
        source={backgroundImage}
        priority={FastImage.priority.normal}
        resizeMode={FastImage.resizeMode.stretch}
        style={styles.image}
      />
      <View style={statusBarContent}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default BackGroundView;
