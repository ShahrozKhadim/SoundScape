import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

import {colors, smallTextStyle} from '../Assets/Styles';

const {white, green} = colors;

const Toast = ({text, isVisible}) => (
  <Modal
    animationType={'slide'}
    transparent={true}
    visible={isVisible}
    style={styles.container}>
    <View style={styles.centeredView}>
      <View style={styles.textContainer}>
        <Text style={[smallTextStyle, {color: white}]}>
          {text} Item Added to Cart!
        </Text>
      </View>
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
    marginTop: 30,
  },
  textContainer: {
    width: '80%',
    paddingVertical: 3,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: green,
  },
});
export default Toast;
