import React from 'react';
import {useDispatch} from 'react-redux';

import {ProfileScreen} from '../Screens';
import {logout} from '../Store/Actions';
import {StackActions} from '@react-navigation/native';
import {ROUTES} from '../Navigation/Routes';
import {useAuth} from '../hooks';

const {LOGIN} = ROUTES;

const ProfileContainer = ({navigation}) => {
  const {goBack, navigate} = navigation;
  const dispatch = useDispatch();
  const {user: userData} = useAuth();

  const handleBackPress = () => goBack();
  const handlePress = route => {
    //navigate(route);
  };
  const handleLogoutPress = () => {
    try {
      dispatch(logout());
      navigation.dispatch(StackActions.replace(LOGIN));
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <ProfileScreen
      navigation={navigation}
      name={userData?.name}
      email={userData?.email}
      avatar={userData?.photo}
      handleLogoutPress={handleLogoutPress}
      handlePress={handlePress}
      handleBackPress={handleBackPress}
    />
  );
};

export default ProfileContainer;
