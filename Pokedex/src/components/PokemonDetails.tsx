import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}
const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text key={type.name} style={styles.regularText}>
              {type.name}
            </Text>
          ))}
        </View>
        {/* Peso */}
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.regularText}>{pokemon.weight / 10} kg</Text>
      </View>

      {/* Sprites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprites}
        />
      </ScrollView>

      {/* Base abilities */}
      <View style={{...styles.container}}>
        <Text style={styles.title}>Base Abilities</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text key={ability.name} style={styles.regularText}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Stats */}
      <View style={{...styles.container}}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text style={{...styles.regularText, width: 150}}>
                {stat.stat.name}:
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{marginVertical: 20, alignItems: 'center'}}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprites}
        />
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  regularText: {
    fontSize: 19,
    color: 'black',
    marginRight: 10,
  },
  basicSprites: {
    height: 100,
    width: 100,
  },
});
