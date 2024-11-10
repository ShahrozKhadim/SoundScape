import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {colors, LargeTextStyle} from '../../Assets/Styles';
import {
  DeleteModal,
  Header,
  PrimaryButton,
  Stepper,
  ViewContainer,
} from '../../Components';

const {white} = colors;

const CheckOutScreen = ({
  refs,
  title,
  handleGoBack,
  activeStep,
  handleConfirmPress,
  ActiveComponent,
  onSubmit,
  submitButtonText,
  discardChanges,
  handleDiscardPress,
  handleCancelPress,
  handleShoppingCartPress,
}) => (
  <ViewContainer style={styles.container}>
    <View style={styles.headerContainer}>
      <Header
        screenName={'Checkout'}
        iconName={'Shopping Cart'}
        handleBackPress={handleGoBack}
        handleShoppingCartPress={handleShoppingCartPress}
      />
      <Stepper activeStep={activeStep} />
    </View>
    <View style={styles.bodyContainer}>
      {activeStep !== 2 && <Text style={LargeTextStyle}>{title}</Text>}
      <ActiveComponent ref={refs} onSubmit={onSubmit[activeStep]} />
    </View>
    <View style={{...styles.center, ...styles.footerContainer}}>
      <PrimaryButton
        handleSubmit={handleConfirmPress}
        textStyle={{...LargeTextStyle, ...styles.buttonText}}
        text={submitButtonText}
      />
    </View>
    <DeleteModal
      isVisible={discardChanges?.isVisible}
      title={discardChanges.title}
      message={discardChanges.message}
      cancelText={discardChanges.cancel}
      deleteText={discardChanges.discard}
      handleDeletePress={handleDiscardPress}
      handleCancelPress={handleCancelPress}
    />
  </ViewContainer>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  scrollContainer: {
    alignItems: 'center',
    rowGap: hp('2.5%'),
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 4,
    alignItems: 'center',
    rowGap: hp('2%'),
  },
  footerContainer: {
    flex: 0.5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: white,
  },
});

export default CheckOutScreen;
