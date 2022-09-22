import {View, Text, Button, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import styles from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button
        title="Abrir modal"
        onPress={() => {
          setIsVisible(true);
        }}
        color="#198754"
      />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 10,
            }}>
            <Text style={{...styleText.textBlack, flex: 0.2}}>Modal</Text>
            <Text style={{...styleText.textBlack, fontSize: 15}}>
              Cuerpo del modal
            </Text>
            <View style={{flex: 0.5}} />
            <Button
              title="Cerrar"
              onPress={() => setIsVisible(false)}
              color="#198754"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styleText = StyleSheet.create({
  textBlack: {
    color: 'black',
    fontSize: 20,
  },
});
