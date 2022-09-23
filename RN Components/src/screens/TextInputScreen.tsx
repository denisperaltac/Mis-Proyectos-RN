import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
  RefreshControl,
} from 'react-native';
import React, {useState, useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import styles from '../theme/appTheme';
import CustomSwitch from '../components/CustomSwitch';
import {useForm} from '../hooks/useForm';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [refreshing, setRefreshing] = useState(false);

  const {onChange, form, isSubs, setForm} = useForm({
    name: ' ',
    email: ' ',
    phone: ' ',
    isSubs: false,
  });

  const initialStateRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setForm({
        name: ' ',
        email: ' ',
        phone: ' ',
        isSubs: false,
      });
      setRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={initialStateRefresh}
          progressViewOffset={50}
          // progressBackgroundColor="lightgrey"
          colors={['green', 'red', 'blue']}
          title="Reload"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Text Inputs" />
        <TextInput
          style={{
            ...stylesInput.inputStyle,
            color: colors.text,
            backgroundColor: colors.primary,
          }}
          placeholder="Ingrese su nombre"
          placeholderTextColor="rgba(0,0,0,0.5)"
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={value => onChange(value, 'name')}
        />
        <TextInput
          style={{
            ...stylesInput.inputStyle,
            color: colors.text,
            backgroundColor: colors.primary,
          }}
          placeholder="Ingrese su Email"
          placeholderTextColor="rgba(0,0,0,0.5)"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => onChange(value, 'email')}
          keyboardType="email-address"
        />
        <TextInput
          style={{
            ...stylesInput.inputStyle,
            color: colors.text,
            backgroundColor: colors.primary,
          }}
          placeholder="Ingrese su teléfono"
          placeholderTextColor="rgba(0,0,0,0.5)"
          onChangeText={value => onChange(value, 'phone')}
          keyboardType="phone-pad"
        />
        <View style={stylesInput.switchRow}>
          <Text style={stylesInput.switchText}>To subscribe?</Text>
          <CustomSwitch
            isOn={isSubs}
            onChange={value => onChange(value, 'isSubs')}
          />
        </View>

        <HeaderTitle title={JSON.stringify(form, null, 3)} />
      </View>
    </ScrollView>
  );
};

export default TextInputScreen;

const stylesInput = StyleSheet.create({
  inputStyle: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.5)',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 20,
    color: 'black',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 10,
  },
});
