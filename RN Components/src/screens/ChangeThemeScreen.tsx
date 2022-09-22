import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import styles from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {setDrakTheme} = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />

      <TouchableOpacity
        onPress={setDrakTheme}
        activeOpacity={0.7}
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 20}}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeThemeScreen;
