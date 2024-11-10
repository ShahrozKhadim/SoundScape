import React from 'react';
import {View, StyleSheet, Modal, FlatList} from 'react-native';

import {colors} from '../Assets/Styles';
import {CustomSearchBar, RenderCitiesListWithSearch} from './index';

const {white} = colors;

const CitiesListWithSearchModal = ({
  setSearchInput,
  data,
  visible,
  handleSelectFromList,
  placeholder = 'Select City',
}) => {
  return (
    <Modal visible={visible} animationType={'fade'} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <CustomSearchBar
            editable={true}
            placeholder={placeholder}
            handleChange={setSearchInput}
          />
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={data}
            renderItem={data =>
              RenderCitiesListWithSearch(data, handleSelectFromList)
            }
            style={styles.listWidth}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  listWidth: {
    width: '90%',
  },
});

export default CitiesListWithSearchModal;
