import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;
  const onChange = (value: boolean, field: string) => {
    setState({...state, [field]: value});
  };
  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
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
    color: 'black',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 10,
  },
});

export default SwitchScreen;
