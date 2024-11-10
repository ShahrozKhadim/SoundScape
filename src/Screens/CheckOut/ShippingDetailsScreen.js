import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
  CitiesListDropDown,
  LabeledInput,
  LabeledPhoneNumberInput,
  ProvincesListDropDown,
} from '../../Components';
import {colors} from '../../Assets/Styles';
import {INPUT_FOCUS} from '../../Utils';

const {white} = colors;

const ShippingDetailsScreen = ({
  refs,
  setSearchInput,
  countriesList,
  provincesList,
  selectVisibility,
  handleSelectFromList,
  selectedLocation,
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  formikStateKeys,
  handlePhoneNumberChange,
  phoneNumber,
}) => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <LabeledInput
      ref={refs?.fullName}
      value={values.fullName}
      key={formikStateKeys[0]}
      label={'Full Name'}
      required={true}
      onChangeText={handleChange(formikStateKeys[0])}
      onBlur={handleBlur(formikStateKeys[0])}
      isError={errors?.fullName && touched?.fullName}
      errorMessage={errors?.fullName}
    />
    <LabeledPhoneNumberInput
      ref={refs?.phoneInput}
      required={true}
      label={'Phone Number'}
      value={values.phoneNumber}
      key={formikStateKeys[1]}
      onChangeFormattedText={text =>
        handlePhoneNumberChange('international', text)
      }
      onChangeText={text => handlePhoneNumberChange('localNumber', text)}
      onChangeCountry={country => handlePhoneNumberChange('country', country)}
      onBlur={handleBlur(formikStateKeys[1])}
      isError={errors?.phoneNumber}
      errorMessage={errors?.phoneNumber}
      phoneNumber={phoneNumber}
      onSubmitEditing={() =>
        handleSelectFromList('isSelectProvinceVisible', {})
      }
    />
    <ProvincesListDropDown
      title={selectedLocation?.province}
      data={provincesList}
      searchPlaceholder={'Select Province'}
      setSearchInput={text => {
        handleChange(formikStateKeys[2])(text);
        setSearchInput(text);
      }}
      isOpen={selectVisibility?.isSelectProvinceVisible}
      handleSelectFromList={handleSelectFromList}
      isError={errors?.province && touched?.province}
      errorMessage={errors?.province}
    />
    <CitiesListDropDown
      title={selectedLocation?.city}
      data={countriesList}
      searchPlaceholder={'Select City'}
      setSearchInput={text => {
        handleChange(formikStateKeys[3])(text);
        setSearchInput(text);
      }}
      isOpen={selectVisibility?.isSelectCityVisible}
      handleSelectFromList={handleSelectFromList}
      isError={errors?.city && touched?.city}
      errorMessage={errors?.city}
    />
    <LabeledInput
      ref={refs?.streetAddress}
      value={values.streetAddress}
      key={'streetAddress'}
      label={'Street Address'}
      required={true}
      onChangeText={handleChange(formikStateKeys[4])}
      onBlur={handleBlur(formikStateKeys[4])}
      isError={errors?.streetAddress && touched?.streetAddress}
      errorMessage={errors.streetAddress}
      onSubmitEditing={() => INPUT_FOCUS(refs?.postalCode)}
    />
    <LabeledInput
      ref={refs?.postalCode}
      value={values.postalCode}
      key={'postalCode'}
      label={'Postal Code'}
      onChangeText={handleChange(formikStateKeys[5])}
      onBlur={handleBlur(formikStateKeys[5])}
      required={true}
      isError={errors?.postalCode && touched?.postalCode}
      errorMessage={errors?.postalCode}
      returnKeyType={'done'}
      onSubmitEditing={handleSubmit}
    />
  </ScrollView>
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

export default ShippingDetailsScreen;
