import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {ScrollView} from 'react-native-gesture-handler';
import HorizontalSliderCredits from '../components/HorizontalSliderCredits';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {RootStackParams} from '../navigation/StackNavigator';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <TouchableOpacity
        style={stylesPoster.backButton}
        onPress={() => navigation.pop()}>
        <Text>Back</Text>
      </TouchableOpacity>
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
        <View style={stylesPoster.imageContainer}>
          <Image source={{uri}} style={stylesPoster.posterImage} />
        </View>
      </DropShadow>
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
        }}>
        <Text style={stylesPoster.title}>{movie.title}</Text>
        <Text style={stylesPoster.subtitle}>{movie.original_title} </Text>
        <Text style={stylesPoster.subtitle}>
          {movieFull?.release_date} -{' '}
          {movieFull?.genres.map(g => g.name).join(', ')}
        </Text>
        <View
          style={{
            display: 'flex',

            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...stylesPoster.rank,
            }}>
            {movie.vote_average}
          </Text>
        </View>
      </View>
      <View style={stylesPoster.marginContainer}>
        <Text
          style={{
            ...stylesPoster.title,
            fontWeight: 'bold',
            marginBottom: 5,
            marginTop: 20,
          }}>
          Historia
        </Text>
        <Text style={stylesPoster.subtitle}>{movieFull?.overview}</Text>
        <Text
          style={{
            ...stylesPoster.title,
            fontWeight: 'bold',
            marginBottom: 5,
            marginTop: 20,
          }}>
          Presupuesto
        </Text>
        <Text style={stylesPoster.subtitle}>
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movieFull!?.budget)}
        </Text>
      </View>
      <View style={stylesPoster.marginContainer}>
        {isLoading ? (
          <ActivityIndicator
            size={50}
            color="grey"
            style={{marginTop: 10, alignSelf: 'flex-start', marginLeft: 20}}
          />
        ) : (
          <HorizontalSliderCredits cast={cast} title="Actores" />
        )}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const stylesPoster = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: 'hidden',
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  subtitle: {
    color: 'black',
    fontSize: 15,
  },
  rank: {
    color: 'black',
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    fontWeight: 'bold',
    elevation: 9,
    zIndex: 999, // zIndex solo para IOS
    top: 30,
    left: 20,
  },
});
