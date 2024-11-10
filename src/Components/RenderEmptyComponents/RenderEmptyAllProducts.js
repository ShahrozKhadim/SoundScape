import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {colors} from '../../Assets/Styles';

const {white} = colors;
const {width} = Dimensions.get('window');

const RenderEmptyAllProducts = () => (
  <TouchableOpacity style={styles.renderAllProductsContainer} />
);
const styles = StyleSheet.create({
  renderAllProductsContainer: {
    height: hp('27%'),
    backgroundColor: white,
    width: width,
  },
});
export default memo(RenderEmptyAllProducts);
