import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Info} from '../../Assets/SVGIcons';
import {colors, LargeTextStyle, smallTextStyle} from '../../Assets/Styles';
import {modalStyles} from '../../Assets/Styles';

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
  okButton,
} = modalStyles;

const SuccessModal = ({isVisible, title, message, handleOkPress}) => (
  <Modal
    animationType={'fade'}
    transparent={true}
    visible={isVisible}
    style={modalStyle}>
    <View style={modalContainer}>
      <View style={modal}>
        <View style={circle}>
          <Info height={hp('5%')} width={wp('5%')} color={white} />
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
          <TouchableOpacity onPress={handleOkPress} style={okButton}>
            <Text style={[smallTextStyle, {color: white}]}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default SuccessModal;
