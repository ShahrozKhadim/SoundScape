import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Logo, Menu} from '../Assets/SVGIcons';
import {colors, LargeTextStyle} from '../Assets/Styles';
import {Avatar} from './index';

const {height, width} = Dimensions.get('window');
const {black} = colors;

const HomeHeader = ({handleProfilePress, avatar}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuIconContainer}>
        <Menu height={hp('5%')} width={wp('6.8%')} />
      </View>
      <View style={styles.logoContainer}>
        <Logo height={hp('5%')} width={wp('6.8%')} />
        <Text style={[LargeTextStyle, styles.text]}>Audio</Text>
      </View>
      <TouchableOpacity onPress={handleProfilePress}>
        <Avatar
          height={height / 19}
          width={width / 9}
          borderRadius={height / 19}
          source={avatar}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp('4.5%'),
    width: wp('95%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19.05,
    color: black,
    margin: 5,
  },
});
export default HomeHeader;
