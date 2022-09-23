import React, {useContext} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import styles from '../theme/appTheme';

export default function AlertScreen() {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const showAlert = () => {
    Alert.alert(
      'Title',
      'This is the alert Message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true, // Cancelable nos permite cerrar la ventana al presionar por fuera
        onDismiss: () => console.log('Cancel Pressed'),
      },
    );
  };

  const showPrompt = () => {
    prompt(
      'Password',
      'Hi this is a prompt',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,

        placeholder: 'Enter your code',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button
        title="Mostrar Alerta"
        onPress={showAlert}
        color={colors.primary}
      />
      <View style={{marginTop: 10}} />
      <Button title="Show Propt" onPress={showPrompt} color={colors.primary} />
    </View>
  );
}
