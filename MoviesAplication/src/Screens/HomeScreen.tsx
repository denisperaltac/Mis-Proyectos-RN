import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MovieCard from '../components/MovieCard';
import useMovies from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = popular[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const colors = await ImageColors.getColors(uri, {});
    //   fallback: '#228B22',
    //   cache: true,
    //   key: 'unique_key',
    // });

    // console.log(result);

    // switch (result.platform) {
    //   case 'android':
    //     // android result properties
    //     const vibrantColor = result.vibrant;
    //     break;
    //   case 'web':
    //     // web result properties
    //     const lightVibrantColor = result.lightVibrant;
    //     break;
    //   case 'ios':
    //     // iOS result properties
    //     const primaryColor = result.primary;
    //     break;
    //   default:
    //     throw new Error('Unexpected platform key');
    // }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carousel Principal */}
          <View style={{height: 450}}>
            <Carousel
              data={popular}
              renderItem={e => <MovieCard movie={e.item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* Peliculas Populares */}

          <HorizontalSlider movies={nowPlaying} title="En cartelera" />
          <HorizontalSlider movies={topRated} title="Mejor Puntaje" />
          <HorizontalSlider movies={upcoming} title="Pronto..." />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
