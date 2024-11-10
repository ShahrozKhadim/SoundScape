import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Remove} from '../../Assets/SVGIcons';
import {
  colors,
  LargeTextStyle,
  smallTextStyle,
  modalStyles,
} from '../../Assets/Styles';

const {white} = colors;
const {
  modalStyle,
  modalContainer,
  modal,
  circle,
  modalHeader,
  modalBody,
  messageText,
  modalFooter,
} = modalStyles;

const DeleteModal = ({
  isVisible,
  title,
  message,
  cancelText,
  deleteText,
  handleDeletePress,
  handleCancelPress,
}) => (
  <Modal
    animationType={'fade'}
    transparent={true}
    visible={isVisible}
    style={modalStyle}>
    <View style={modalContainer}>
      <View style={modal}>
        <View style={[circle, styles.circleBackgroundColor]}>
          <Remove height={hp('8%')} width={wp('10%')} color={white} />
        </View>
        {title && (
          <View style={modalHeader}>
            <Text style={LargeTextStyle}>{title}</Text>
          </View>
        )}
        <View style={modalBody}>
          <Text style={[smallTextStyle, messageText]}>{message}</Text>
        </View>
        <View style={modalFooter}>
          <TouchableOpacity
            onPress={handleDeletePress}
            style={[styles.buttonStyle, styles.deleteButton]}>
            <Text style={[smallTextStyle, {color: white}]}>{deleteText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCancelPress}
            style={[styles.buttonStyle, styles.cancelButton]}>
            <Text style={smallTextStyle}>{cancelText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#FF2E2E',
  },
  cancelButton: {
    backgroundColor: white,
  },
  circleBackgroundColor: {
    backgroundColor: '#FF2E2E',
  },
});
export default DeleteModal;
