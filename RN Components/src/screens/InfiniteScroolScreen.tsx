import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useState, useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const InfiniteScroolScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 2000);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/400/300`}
        colores={colors}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View style={{height: 100, justifyContent: 'center'}}>
            <ActivityIndicator color={colors.primary} size={40} />
          </View>
        }
      />
    </View>
  );
};

export default InfiniteScroolScreen;

const stylesText = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
