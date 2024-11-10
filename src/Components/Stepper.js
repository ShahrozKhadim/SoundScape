import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {
  PaymentCardSolid,
  ReviewSolid,
  BoxSolid,
  BoxRegular,
  ReviewRegular,
} from '../Assets/SVGIcons';
import {colors} from '../Assets/Styles';
import {ActiveIconAndText} from './index';

const {white, green} = colors;

const Stepper = ({activeStep = 0}) => {
  let activeStepOne =
    activeStep >= 1 ? styles.activeHorizontalLine : styles.horizontalLine;
  let activeStepTwo =
    activeStep === 2 ? styles.activeHorizontalLine : styles.horizontalLine;

  return (
    <View style={styles.container}>
      <ActiveIconAndText
        text={'Shipping'}
        isActive={activeStep >= 0}
        SolidIcon={BoxSolid}
        RegularIcon={BoxRegular}
      />
      <View style={activeStepOne} />
      <ActiveIconAndText
        text={'Payment'}
        isActive={activeStep >= 1}
        SolidIcon={PaymentCardSolid}
        RegularIcon={PaymentCardSolid}
      />
      <View style={activeStepTwo} />
      <ActiveIconAndText
        text={'Review'}
        isActive={activeStep >= 2}
        SolidIcon={ReviewSolid}
        RegularIcon={ReviewRegular}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: StyleSheet.hairlineWidth,
    width: wp('20%'),
  },
  activeHorizontalLine: {
    borderBottomWidth: 2,
    borderColor: green,
    width: wp('20%'),
  },
});

export default Stepper;
