import React from 'react';
import {View, StyleSheet, Modal, ActivityIndicator} from 'react-native';

import {colors} from '../Assets/Styles';

const {green} = colors;

const LoadingIndicator = ({isVisible}) => (
  <Modal
    animationType={'slide'}
    transparent={true}
    visible={isVisible}
    style={styles.container}>
    <View style={styles.centeredView}>
      <ActivityIndicator size={'large'} color={green} />
    </View>
  </Modal>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
export default LoadingIndicator;
