import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {AddToCart} from '../Assets/SVGIcons';
import {colors} from '../Assets/Styles';

const {green, black} = colors;

const ShareActionButton = ({
  onPress,
  Icon = AddToCart,
  iconColor = green,
  iconHeight = hp('3%'),
  iconWidth = wp('5%'),
  text = '',
}) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <Icon height={iconHeight} width={iconWidth} color={iconColor} />
    <Text style={styles.menuItemText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuItemContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: hp('1.8%'),
    color: black,
    marginLeft: 10,
  },
});

export default ShareActionButton;
