import React from 'react';
import {View, StyleSheet, Modal, FlatList} from 'react-native';

import {colors} from '../Assets/Styles';
import {CustomSearchBar, RenderProvincesListWithSearch} from './index';

const {white} = colors;

const ProvincesListWithSearchModal = ({
  setSearchInput,
  data,
  visible,
  handleSelectFromList,
  placeholder = 'Select Province',
}) => {
  return (
    <Modal visible={visible} animationType={'slide'} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <CustomSearchBar
            editable={true}
            placeholder={placeholder}
            handleChange={setSearchInput}
            returnKeyType={'search'}
          />
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={data}
            renderItem={item =>
              RenderProvincesListWithSearch(item, handleSelectFromList)
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

export default ProvincesListWithSearchModal;
