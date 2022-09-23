import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import styles from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {
    setDrakTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setDrakTheme}
          activeOpacity={0.7}
          style={{
            backgroundColor: 'black',

            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>Dark </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.7}
          style={{
            backgroundColor: 'white',

            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 20, color: 'black'}}>Light </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;
