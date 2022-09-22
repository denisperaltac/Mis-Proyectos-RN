import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import CreditCard from './CreditCard';

import MovieCard from './MovieCard';

interface Props {
  title: string;
  cast: Cast[];
}
const HorizontalSliderCredits = ({title, cast}: Props) => {
  return (
    <View style={{height: 300, marginTop: 30}}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 5,
        }}>
        {title}
      </Text>
      <FlatList
        data={cast}
        renderItem={e => <CreditCard cast={e.item} height={200} width={140} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

export default HorizontalSliderCredits;
