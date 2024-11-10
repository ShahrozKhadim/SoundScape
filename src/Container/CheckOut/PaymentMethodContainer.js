import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {Formik} from 'formik';

import {PaymentMethodScreen} from '../../Screens';
import {CARD_VALIDATION_SCHEMA} from '../../Utils';
import {formatCardNumber, formatExpiry} from '../../Utils/helpers';
import {useCheckOut} from '../../hooks';

const PAYMENT_OPTION_INITIAL_STATE = 'Credit Card';
const CARD_DETAIL_INITIAL_STATE = {
  cardHolderName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  paymentMethod: 'Credit Card',
};
const formikStateKeys = [
  'cardHolderName',
  'cardNumber',
  'expiryDate',
  'cvv',
  'paymentMethod',
];

const PaymentMethodContainer = (props, ref) => {
  const refs = {
    cardHolderName: useRef(),
    cardNumber: useRef(),
    expiryDate: useRef(),
    cvv: useRef(),
  };
  const {paymentMethod} = useCheckOut();
  const [paymentOption, setPaymentOption] = useState(
    paymentMethod?.paymentMethod,
  );
  const [cardDetail, setCardDetails] = useState(paymentMethod);

  useEffect(() => {
    if (ref.current) {
      ref.current.values.paymentMethod = paymentOption;
    }
  }, [paymentOption]);

  const handleOptionSelect = key => {
    setPaymentOption(key);
    if (ref.current) {
      ref.current.values.paymentMethod = key;
    }
  };
  const handleCardDetails = (key, value) => {
    setCardDetails(prevState => ({
      ...prevState,
      [key]: value.trim(),
    }));
    ref.current.values[key] = value;
  };
  const handleCardNumber = (key, text) => {
    let formatText = formatCardNumber(text);
    handleCardDetails(key, formatText);
  };
  const handleExpiryDate = (datKey, text) => {
    const formatText = formatExpiry(text);
    handleCardDetails(datKey, formatText);
  };

  return (
    <Formik
      innerRef={ref}
      initialValues={paymentMethod}
      validationSchema={CARD_VALIDATION_SCHEMA}
      onSubmit={(values, formikHelpers) =>
        props?.onSubmit(values, formikHelpers)
      }>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <PaymentMethodScreen
          handleOptionSelect={handleOptionSelect}
          handleCardDetails={handleCardDetails}
          paymentOption={paymentOption}
          cardDetail={cardDetail}
          handleExpiryDate={handleExpiryDate}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          formikStateKeys={formikStateKeys}
          handleCardNumber={handleCardNumber}
          refs={refs}
        />
      )}
    </Formik>
  );
};
export default forwardRef(PaymentMethodContainer);
