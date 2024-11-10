import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Header, SubHeading, Avatar} from '../Components';
import {colors, LargeTextStyle, smallTextStyle} from '../Assets/Styles';
import {
  EditProfile,
  Logout,
  Notifications,
  PrivacyPolicy,
  ReportABug,
  SelectedStar,
  TermsOfUse,
} from '../Assets/SVGIcons';
import {ROUTES} from '../Navigation/Routes';

const {
  EDIT_PROFILE,
  NOTIFICATIONS,
  WISHLIST,
  TERMS_OF_USE,
  PRIVACY_POLICY,
  REPORT_A_BUG,
} = ROUTES;
const {greyDark, white, redLight} = colors;
const avatarHeight = 80;

const ProfileScreen = ({
  navigation,
  name = 'Andrea Hirata',
  email = 'hirata@gmail.com',
  handleLogoutPress,
  avatar,
  handlePress,
  handleBackPress,
}) => (
  <View style={styles.container}>
    <Header
      navigation={navigation}
      screenName={'Profile'}
      hideRightIcon={true}
      handleBackPress={handleBackPress}
    />
    <View
      style={{...styles.profileHeaderContainer, ...styles.subHeadingBorder}}>
      <Avatar
        height={avatarHeight}
        width={avatarHeight}
        borderRadius={avatarHeight}
        source={{uri: avatar}}
      />
      <View style={{width: wp('60%')}}>
        <Text style={[LargeTextStyle, styles.textStyle]}>{name}</Text>
        <Text style={[smallTextStyle, styles.textStyle, {color: greyDark}]}>
          {email}
        </Text>
      </View>
    </View>
    <View style={styles.profileOptions}>
      <>
        <Text style={subHeadingLabel}>General</Text>
        <SubHeading
          onPress={() => handlePress(EDIT_PROFILE)}
          Icon={EditProfile}
          text={'Edit Profile'}
        />
        <SubHeading
          onPress={() => handlePress(NOTIFICATIONS)}
          Icon={Notifications}
          text={'Notifications'}
        />
        <SubHeading
          onPress={() => handlePress(WISHLIST)}
          Icon={SelectedStar}
          text={'Wishlist'}
        />
      </>
      <>
        <Text style={subHeadingLabel}>Legal</Text>
        <SubHeading
          onPress={() => handlePress(TERMS_OF_USE)}
          Icon={TermsOfUse}
          text={'Terms of use'}
        />
        <SubHeading
          onPress={() => handlePress(PRIVACY_POLICY)}
          Icon={PrivacyPolicy}
          text={'Privacy Policy'}
        />
      </>
      <>
        <Text style={subHeadingLabel}>Personal</Text>
        <SubHeading
          onPress={() => handlePress(REPORT_A_BUG)}
          Icon={ReportABug}
          text={'Report a bug'}
        />
        <SubHeading
          onPress={handleLogoutPress}
          Icon={Logout}
          iconColor={redLight}
          text={'Logout'}
          textStyle={styles.logoutStyle}
        />
      </>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  profileHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  profileOptions: {
    flex: 3,
  },
  textStyle: {
    color: '#000',
  },
  subHeadingBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subHeadingStyle: {
    paddingVertical: 13,
  },
  logoutStyle: {
    color: '#FF2E2E',
    fontWeight: '700',
  },
});
const subHeadingLabel = [
  styles.textStyle,
  styles.subHeadingStyle,
  smallTextStyle,
  {color: greyDark, paddingLeft: 35},
];

export default ProfileScreen;
