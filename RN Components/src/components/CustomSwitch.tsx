import {View, Switch, StyleSheet} from 'react-native';
import React, {useState, useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export default function CustomSwitch({isOn, onChange}: Props) {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#767577', true: colors.primary}}
      thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
