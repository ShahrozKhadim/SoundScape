import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {Formik} from 'formik';

import ShippingDetailsScreen from '../../Screens/CheckOut/ShippingDetailsScreen';
import {COUNTRIES} from '../../Utils/Data';
import {CHECKOUT_FORM_SCHEMA, getProvinceLists} from '../../Utils';
import {useCheckOut} from '../../hooks';

const SELECT_VISIBILITY_INITIAL_STATE = {
  isSelectProvinceVisible: false,
  isSelectCityVisible: false,
};
const FORMIK_INITIAL_STATE = {
  fullName: '',
  phoneNumber: '',
  province: '',
  city: '',
  streetAddress: '',
  postalCode: '',
};
const FORMIK_STATE_KEYS = [
  'fullName',
  'phoneNumber',
  'province',
  'city',
  'streetAddress',
  'postalCode',
];
const PHONE_NUMBER_INITIAL_STATE = {
  formatted: '',
  numeric: '',
  international: '',
  localNumber: '',
  country: {
    callingCode: ['92'],
    cca2: 'PK',
    currency: ['PKR'],
    flag: 'flag-pk',
    name: 'Pakistan',
    region: 'Asia',
    subregion: 'Southern Asia',
  },
};

const ShippingDetailsContainer = ({onSubmit}, ref) => {
  const {shippingDetails} = useCheckOut();
  const {
    shippingDetails: {city, province, phoneNumberDetails},
  } = useCheckOut();
  const refs = {
    fullName: useRef(),
    phoneInput: useRef(),
    streetAddress: useRef(),
    postalCode: useRef(),
  };
  const SELECTED_LOCATION_INITIAL_STATE = {
    city: city || 'Select City',
    province: province || 'Select Province',
  };
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberDetails);
  const [provincesList, setProvincesList] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(
    SELECTED_LOCATION_INITIAL_STATE,
  );
  const [searchInput, setSearchInput] = useState('');
  const [selectVisibility, setSelectVisibility] = useState(
    SELECT_VISIBILITY_INITIAL_STATE,
  );
  let {
    localNumber,
    international,
    country: {callingCode},
  } = phoneNumber;

  useEffect(() => {
    let listOfProvinces = getProvinceLists(COUNTRIES);
    setProvincesList(listOfProvinces);

    return () => {
      setProvincesList([]);
    };
  }, []);
  useEffect(() => {
    const numeric = `${callingCode.join()}${localNumber}`;
    const formatted = `(${callingCode.join()}) ${localNumber}`;
    setPhoneNumber(prevState => ({
      ...prevState,
      numeric: numeric,
      formatted: formatted,
    }));
  }, [localNumber]);
  useEffect(() => {
    if (international) {
      ref.current.values.phoneNumber = international;
      handlePhoneNumberValidity();
    }
  }, [international]);
  useEffect(() => {
    if (selectedLocation.province !== 'Select Province') {
      ref.current.values.province = selectedLocation.province;
    }
  }, [selectedLocation?.province]);
  useEffect(() => {
    if (selectedLocation.city !== 'Select City') {
      ref.current.values.city = selectedLocation.city;
    }
  }, [selectedLocation?.city]);

  /**
   * Filters countries based on the search query entered by the user.
   *
   * The function compares the `searchInput` against the `name`, `countryCode`,
   * `countryCode2`, and `countryCode3` properties of each item in the `COUNTRIES` array.
   * It returns a filtered list of countries that match the search query.
   *
   * @returns {Array} A filtered array of countries that match the search query.
   *
   */
  const filterCities = () => {
    const isQuery = searchInput.toLowerCase().trim();
    return COUNTRIES.filter(item => {
      const {name, countryCode, countryCode2, countryCode3} = item;
      return (
        (name && name.toLowerCase().includes(isQuery)) ||
        (countryCode && countryCode.toLowerCase().includes(isQuery)) ||
        (countryCode2 && countryCode2.toLowerCase().includes(isQuery)) ||
        (countryCode3 && countryCode3.toLowerCase().includes(isQuery))
      );
    });
  };

  const filterProvinces = () => {
    if (!provincesList) {
      return null;
    }
    const isQuery = searchInput.toLowerCase().trim();
    return provincesList.filter(item => {
      const {state} = item;
      return state.toLowerCase().includes(isQuery);
    });
  };
  //Phone number input handling starts here
  const handlePhoneNumberValidity = () => {
    const checkValid = ref?.phoneInput?.current?.isValidNumber(
      ref.current.values.phoneNumber,
    );
    !checkValid &&
      ref?.current?.setFieldError(
        FORMIK_STATE_KEYS[1],
        'Phone number is invalid',
      );
  };
  const handlePhoneNumberChange = (key, value, number = localNumber) =>
    setPhoneNumber(prevState => ({
      ...prevState,
      [key]: value,
    }));
  //Phone number input handling ends here
  const handleSelectFromList = (visibleKey, selectedItem, locationKey) => {
    setSelectedLocation(prevState => ({
      ...prevState,
      [locationKey]: selectedItem,
    }));
    setSelectVisibility(prevState => ({
      ...prevState,
      [visibleKey]: !selectVisibility[visibleKey],
    }));
    setSearchInput('');
  };

  return (
    <Formik
      innerRef={ref}
      initialValues={{
        ...shippingDetails,
        phoneNumber: phoneNumberDetails?.localNumber,
      }}
      // initialValues={FORMIK_INITIAL_STATE}
      validationSchema={CHECKOUT_FORM_SCHEMA}
      onSubmit={(values, formikHelpers) =>
        onSubmit(values, formikHelpers, phoneNumber)
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
        <ShippingDetailsScreen
          refs={refs}
          setSearchInput={setSearchInput}
          countriesList={filterCities()}
          provincesList={filterProvinces()}
          selectVisibility={selectVisibility}
          handleSelectFromList={handleSelectFromList}
          selectedLocation={selectedLocation}
          errors={errors}
          touched={touched}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          formikStateKeys={FORMIK_STATE_KEYS}
          handlePhoneNumberChange={handlePhoneNumberChange}
          phoneNumber={phoneNumber}
          // handleInputFocus={handleInputFocus}
        />
      )}
    </Formik>
  );
};

export default forwardRef(ShippingDetailsContainer);
