import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';

import {Cross} from '../Assets/SVGIcons';
import {colors, smallTextStyle} from '../Assets/Styles';

const {black, white, green} = colors;

const LostInternetConnectivity = ({handleCrossPress}) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <Text style={[smallTextStyle, styles.messageText]}>
            No internet connection? No problem! You can still use our app
            offline. We'll sync your data once you're back online. Enjoy!
          </Text>
          <TouchableOpacity onPress={handleCrossPress}>
            <Cross height={20} width={20} color={black} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: white,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    padding: 10,
    flexDirection: 'row',
    top: 20,
    borderTopWidth: 3,
    borderColor: green,
    borderRadius: 5,
  },
  messageText: {
    width: '80%',
  },
});
export default LostInternetConnectivity;
