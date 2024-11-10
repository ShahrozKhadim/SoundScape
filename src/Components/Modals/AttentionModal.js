import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Warning} from '../../Assets/SVGIcons';
import {
  colors,
  LargeTextStyle,
  modalStyles,
  smallTextStyle,
} from '../../Assets/Styles';

const {white, yellow} = colors;
const {
  modalStyle,
  modalContainer,
  modal,
  circle,
  modalHeader,
  modalBody,
  messageText,
  modalFooter,
  okButton,
} = modalStyles;

const AttentionModal = ({
  isVisible,
  title = '',
  message = '',
  handleOkPress,
}) => (
  <Modal
    animationType={'fade'}
    transparent={true}
    visible={isVisible}
    style={modalStyle}>
    <View style={modalContainer}>
      <View style={modal}>
        <View style={{...circle, ...styles.circleBackgroundColor}}>
          <Warning height={hp('5%')} width={wp('5%')} color={white} />
        </View>
        <View style={modalHeader}>
          <Text style={LargeTextStyle}>{title}</Text>
        </View>
        <View style={modalBody}>
          <Text style={{...smallTextStyle, ...messageText}}>{message}</Text>
        </View>
        <View style={modalFooter}>
          <TouchableOpacity
            onPress={handleOkPress}
            style={{...okButton, ...styles.okButtonBackgroundColor}}>
            <Text style={{...smallTextStyle, color: white}}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  okButtonBackgroundColor: {
    backgroundColor: yellow,
  },
  circleBackgroundColor: {
    backgroundColor: yellow,
  },
});
export default AttentionModal;
