import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

type Props = {
  isVisible: boolean,
}

const LoadingModal = ({ isVisible }: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.containerView}>
        <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', opacity: .5 }} />
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  )
}

export default LoadingModal

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  }
});