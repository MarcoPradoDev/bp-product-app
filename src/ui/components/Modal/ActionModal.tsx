import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../config/theme';
import Button from '../Button';
import Label from '../Label';

type Props = {
  isVisible: boolean,
  hideModal: () => void,
  productName?: string,
  handleConfirm: () => void
}

const ActionModal = ({ isVisible, hideModal, productName, handleConfirm }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.containerView}>
        <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', opacity: .5 }} />
        <View style={styles.modalView}>
          <View style={[styles.container, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
            <Icon name='close' onPress={hideModal} size={ms(20)} color='black' />
          </View>
          <View style={styles.divider} />
          <View style={[styles.container, { paddingVertical: ms(30) }]}>
            <Label style={{ textAlign: 'center' }}>¿Estás seguro de eliminar el producto {productName}</Label>
          </View>
          <View style={styles.divider} />
          <View style={styles.container}>
            <Button title='Confirmar' type='primary' onPress={handleConfirm} />
            <Button title='Cancelar' type='secondary' onPress={hideModal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ActionModal

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopEndRadius: ms(20),
    borderTopStartRadius: ms(20),
    elevation: 5,
  },
  divider: {
    height: ms(1),
    backgroundColor: colors.grayLight,
  },
  container: {
    paddingHorizontal: ms(20),
    paddingVertical: ms(15),
    gap: ms(10)
  }
});