import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import styles from '../theme/appTheme';
import FadeInImage from '../components/FadeInImage';

const InfiniteScroolScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

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
      // <Image
      //   source={{uri: `https://picsum.photos/id/${item}/400/300`}}
      //   style={{width: '100%', height: 300}}
      // />
      <FadeInImage uri={`https://picsum.photos/id/${item}/400/300`} />
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
            <ActivityIndicator color="#198754" size={40} />
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
