import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MovieCard = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details' as never, movie as never)}
        activeOpacity={0.8}
        style={{width, height, marginHorizontal: 5, paddingHorizontal: 7}}>
        <View style={stylesCard.imageContainer}>
          <Image source={{uri}} style={stylesCard.image} />
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
};

export default MovieCard;

const stylesCard = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
  },
});
