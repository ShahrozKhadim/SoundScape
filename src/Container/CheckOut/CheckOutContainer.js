import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

import {CheckOutScreen} from '../../Screens';
import ShippingDetailsContainer from './ShippingDetailsContainer';
import PaymentMethodContainer from './PaymentMethodContainer';
import ReviewContainer from './ReviewContainer';
import {ROUTES} from '../../Navigation/Routes';
import {
  clearCheckOut,
  setPaymentMethod,
  setShippingDetails,
} from '../../Store/Actions';
import {useCheckOut} from '../../hooks';

const {ORDER_PLACE_SUCCESS, SHOPPING_CART} = ROUTES;

const steps = {
  component: [
    ShippingDetailsContainer,
    PaymentMethodContainer,
    ReviewContainer,
  ],
  title: ['Enter Shipping Details', 'Select a Payment Method', ''],
  buttonText: ['Confirm', 'Confirm', 'Confirm Order'],
};
const DISCARD_CHANGES_INITIAL_STATE = {
  isVisible: false,
  title: 'Discard Changes?',
  message:
    'Are you sure you want to discard your changes? This action cannot be undone.',
  cancel: 'Keep Editing',
  discard: 'Discard Changes',
};

const CheckOutContainer = ({navigation}) => {
  const {addListener, goBack, navigate, dispatch} = navigation;
  const dispatchAction = useDispatch();
  const ref = useRef();
  const {formHasData} = useCheckOut();
  const [activeStep, setActiveStep] = useState(0);
  const [discardChanges, setDiscardChanges] = useState(
    DISCARD_CHANGES_INITIAL_STATE,
  );
  const [navigationEvent, setNavigationEvent] = useState({});

  const onSubmit = {
    0: handleShippingDetails,
    1: handlePaymentDetails,
    2: null,
  };

  const ActiveComponent = steps?.component[activeStep];

  useEffect(
    () =>
      addListener('beforeRemove', e => {
        if (!checkUnSavedChanges(ref?.current?.values)) {
          return;
        }
        e.preventDefault();

        setDiscardChanges(prevState => ({...prevState, isVisible: true}));
        setNavigationEvent(e?.data?.action);
      }),
    [navigation, formHasData, addListener],
  );

  const handleGoBack = () => {
    if (activeStep === 0) {
      goBack();
    } else {
      setActiveStep(activeStep - 1);
    }
  };
  const checkUnSavedChanges = (values = false) => {
    if (!Object.keys(values)) {
      return;
    }
    let hasUnSavedChanges = false;
    for (let key in values) {
      if (key !== 'phoneNumberDetails' && values[key].length !== 0) {
        hasUnSavedChanges = true;
        return true;
      }
    }
    return hasUnSavedChanges;
  };
  const handleConfirmPress = () => {
    if (activeStep === 2) {
      dispatchAction(clearCheckOut());
      navigate(ORDER_PLACE_SUCCESS);
    }
    if (ref?.current) {
      ref?.current?.handleSubmit();
    }
  };
  const handleActiveStep = () => {
    const nextStep = activeStep === 2 ? 0 : activeStep + 1;
    setActiveStep(nextStep);
  };
  function handleShippingDetails(
    shippingAddress,
    formikHelpers,
    phoneNumberDetails,
  ) {
    let shippingDetailsBody = {
      ...shippingAddress,
      phoneNumberDetails,
    };
    dispatchAction(setShippingDetails(shippingDetailsBody));
    handleActiveStep();
  }
  function handlePaymentDetails(cardDetails, formikHelpers) {
    dispatchAction(setPaymentMethod(cardDetails));
    handleActiveStep();
  }
  function handleDiscardPress() {
    handleDiscardVisible();
    dispatch(navigationEvent);
  }
  function handleDiscardVisible() {
    setDiscardChanges(prevState => ({
      ...prevState,
      isVisible: !discardChanges?.isVisible,
    }));
  }
  const handleShoppingCartPress = () => navigate(SHOPPING_CART);

  return (
    <CheckOutScreen
      title={steps?.title[activeStep]}
      refs={ref}
      handleGoBack={handleGoBack}
      handleConfirmPress={handleConfirmPress}
      activeStep={activeStep}
      ActiveComponent={ActiveComponent}
      onSubmit={onSubmit}
      submitButtonText={steps?.buttonText[activeStep]}
      discardChanges={discardChanges}
      handleDiscardPress={handleDiscardPress}
      handleCancelPress={handleDiscardVisible}
      handleShoppingCartPress={handleShoppingCartPress}
    />
  );
};

export default CheckOutContainer;
