import React from 'react';

import {OrderPlaceSuccessScreen} from '../../Screens';
import {ROUTES} from '../../Navigation/Routes';

const {HOME} = ROUTES;

const OrderPlaceSuccessContainer = ({navigation}) => {
  const {navigate} = navigation;
  const handleContinueShopping = () => navigate(HOME);

  return (
    <OrderPlaceSuccessScreen handleContinueShopping={handleContinueShopping} />
  );
};

export default OrderPlaceSuccessContainer;
