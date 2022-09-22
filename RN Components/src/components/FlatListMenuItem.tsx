import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation<any>();
  // const {colors} = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#198754" size={18} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="#198754" size={18} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  itemText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 15,
  },
});
