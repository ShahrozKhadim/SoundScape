import * as React from 'react';
import {Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from './Routes';
import {
  CheckOutContainer,
  EnterEmailAddressContainer,
  ExploreProductsContainer,
  HomeContainer,
  LoginContainer,
  OrderPlaceSuccessContainer,
  ProductDetailContainer,
  ProductFeatureContainer,
  ProfileContainer,
  ResetPasswordContainer,
  SearchContainer,
  ShoppingCartContainer,
  SignUpContainer,
  VerifyResetCodeContainer,
} from '../Container';
import {INITIAL_ROUTE} from '../Constants';
import {useAuth} from '../hooks';

const {
  LOGIN,
  SIGNUP,
  ENTER_EMAIL_ADDRESS,
  VERIFY_RESET_CODE,
  RESET_PASSWORD,
  HOME,
  SEARCH,
  EXPLORE_PRODUCTS,
  PRODUCT_DETAIL,
  PRODUCT_FEATURE,
  SHOPPING_CART,
  CHECK_OUT,
  PROFILE,
  ORDER_PLACE_SUCCESS,
} = ROUTES;

/**
 * Main Navigation Component
 *
 * Sets up the main navigation stack and configures the linking options for deep linking.
 *
 * @returns {React.JSX.Element} The navigation container with configured stack navigator.
 */
const Navigation = () => {
  const {isAuthenticated} = useAuth();
  const {Navigator, Screen} = createNativeStackNavigator();

  /**
   * Linking configuration for deep linking
   * - Defines URL prefixes and maps routes to URL paths.
   */
  const linking = {
    prefixes: [
      'https://www.soundscape.com',
      'http://www.soundscape.com',
      'www.soundscape.com',
    ],
    /**
     *
     * @returns {Promise<string>}
     */
    async getInitialURL() {
      const url = await Linking.getInitialURL();
      if (url) {
        return url;
      }
    },
    config: {
      initialRouteName: 'Home',
      screens: {
        Login: 'login',
        SignUp: 'signup',
        Home: 'home',
        Search: 'search',
        ExploreProducts: 'exploreproducts',
        ProductDetail: 'productdetail',
        ProductFeature: 'productfeature',
        ShoppingCart: 'shoppingcart',
        Profile: 'profile',
        EnterEmailAddress: 'enteremailaddress',
        VerifyResetCode: 'verifyresetcode',
        ResetPassword: 'resetpassword',
        EditProfile: 'editprofile',
        Notifications: 'notifications',
        WishList: 'wishlist',
        TermsOfUse: 'termsofuse',
        PrivacyPolicy: 'privacypolicy',
        ReportBug: 'reportbug',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Navigator
        initialRouteName={INITIAL_ROUTE[isAuthenticated]}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Screen name={LOGIN} component={LoginContainer} />
        <Screen name={SIGNUP} component={SignUpContainer} />
        <Screen
          name={ENTER_EMAIL_ADDRESS}
          component={EnterEmailAddressContainer}
        />
        <Screen name={VERIFY_RESET_CODE} component={VerifyResetCodeContainer} />
        <Screen name={RESET_PASSWORD} component={ResetPasswordContainer} />
        <Screen name={HOME} component={HomeContainer} />
        <Screen name={SEARCH} component={SearchContainer} />
        <Screen name={EXPLORE_PRODUCTS} component={ExploreProductsContainer} />
        <Screen name={PRODUCT_DETAIL} component={ProductDetailContainer} />
        <Screen name={PRODUCT_FEATURE} component={ProductFeatureContainer} />
        <Screen name={SHOPPING_CART} component={ShoppingCartContainer} />
        <Screen name={CHECK_OUT} component={CheckOutContainer} />
        <Screen name={PROFILE} component={ProfileContainer} />
        <Screen
          name={ORDER_PLACE_SUCCESS}
          component={OrderPlaceSuccessContainer}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
