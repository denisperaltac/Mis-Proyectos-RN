import {View, Image, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {FadeInImage} from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {simplePokemon, isLoading, loadPokemons} = usePokemonPaginated();

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeballBG}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemon}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.globalMargin,
                ...styles.title,
                top: top + 20,
                marginBottom: top + 30,
              }}>
              Pokedex
            </Text>
          }
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            <ActivityIndicator color="grey" size={20} style={{height: 150}} />
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;
