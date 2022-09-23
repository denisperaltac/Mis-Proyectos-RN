import React, {useState, useContext} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useForm} from '../hooks/useForm';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true,
  });

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {isActive, isHungry, isHappy} = state;
  const onChange = (value: boolean, field: string) => {
    setState({...state, [field]: value});
  };
  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 10,
  },
});

export default SwitchScreen;
