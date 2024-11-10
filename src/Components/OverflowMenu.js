import React from 'react';
import {View, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {colors} from '../Assets/Styles';
import {AddToCart, Share} from '../Assets/SVGIcons';
import {ShareActionButton} from './index';

const {black} = colors;

const OverflowMenu = ({
  isMenuVisible,
  handleIsVisible,
  menuPosition,
  handleAddToCartAndMenuVisibility,
  handleSharePressAndMenuVisibility,
}) => {
  const {top, left} = menuPosition;
  const menu_Position = {top, left};

  return (
    <Modal
      visible={isMenuVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleIsVisible}>
      <TouchableOpacity style={styles.modalContainer} onPress={handleIsVisible}>
        <View
          style={{
            ...styles.menuItemContainer,
            ...menu_Position,
          }}>
          <ShareActionButton
            onPress={handleAddToCartAndMenuVisibility}
            Icon={AddToCart}
            text={'Add too cart'}
          />
          <ShareActionButton
            Icon={Share}
            text={'Share'}
            onPress={handleSharePressAndMenuVisibility}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

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

export default OverflowMenu;
