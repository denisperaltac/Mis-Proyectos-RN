import {View, Switch, StyleSheet} from 'react-native';
import React, {useState} from 'react';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export default function CustomSwitch({isOn, onChange}: Props) {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#767577', true: '#198754'}}
      thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
