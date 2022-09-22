import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

interface Props {
  title: string;
  movies: Movie[];
}
const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: 250, marginTop: 30}}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 10,
          marginBottom: 5,
        }}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={e => <MovieCard movie={e.item} height={200} width={140} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

export default HorizontalSlider;
