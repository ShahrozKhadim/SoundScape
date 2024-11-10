import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors, LargeTextStyle, smallTextStyle} from '../Assets/Styles';
import {productFeatures} from '../Utils/Data';
import {Images} from '../Assets/Images';

const {white} = colors;
const {airpods} = Images;

const Features = ({productFeaturesList}) => {
  const renderProductFeaturesHeader = () => (
    <View style={styles.productFeaturesDescriptionContainer}>
      <Text style={[LargeTextStyle, styles.productTextTitle]}>
        {productFeatures.product.title}
      </Text>
      <Text style={[smallTextStyle, styles.productTextDescription]}>
        {productFeatures.product.description}
      </Text>
    </View>
  );
  const renderProductFeatures = ({item}) => (
    <View style={styles.productFeatureListContainer}>
      <View style={{width: wp('25%')}}>
        <FastImage
          source={airpods}
          style={styles.featureImage}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.featuresContainer}>
        <Text style={LargeTextStyle}>{item.title}</Text>
        <Text style={smallTextStyle}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.productFeaturesContainer}>
      <FlatList
        data={productFeaturesList}
        ListHeaderComponent={renderProductFeaturesHeader}
        renderItem={renderProductFeatures}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productFeaturesContainer: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    marginBottom: '20%',
    backgroundColor: white,
  },
  productFeaturesDescriptionContainer: {
    flex: 1,
  },
  productTextTitle: {marginBottom: 10, marginTop: 15},
  productTextDescription: {
    marginVertical: 5,
    paddingRight: wp('10%'),
  },
  productFeatureListContainer: {
    width: wp('90%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
    paddingVertical: 10,
  },
  featureImage: {
    height: hp('13%'),
    width: wp('28%'),
    borderRadius: 10,
  },
  featuresContainer: {
    justifyContent: 'space-around',
    width: wp('60%'),
  },
});
export default Features;
