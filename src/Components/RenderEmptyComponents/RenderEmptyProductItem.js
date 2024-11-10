import React, {memo} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {colors} from '../../Assets/Styles';

const {white} = colors;
const {width} = Dimensions.get('window');

const RenderEmptyProductItem = () => <View style={styles.productContainer} />;
const styles = StyleSheet.create({
  productContainer: {
    height: hp('27%'),
    width: width,
    backgroundColor: white,
  },
});
export default memo(RenderEmptyProductItem);
