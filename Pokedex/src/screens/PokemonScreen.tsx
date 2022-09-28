import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}
const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {name, id, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();
  const {isLoading, pokemon} = usePokemon(id);

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        {/* Back Button */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingTop: top + 10,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            activeOpacity={0.8}
            style={{...styles.backButton, paddingLeft: 10}}>
            <Icon name="arrow-back-outline" color="white" size={30} />
          </TouchableOpacity>

          {/* Name Pokemon */}
          <Text style={{...styles.pokemonName, top: top}}>
            {name.charAt(0).toLocaleUpperCase() + name.slice(1)}
          </Text>
        </View>

        <Text style={{...styles.pokemonName, paddingHorizontal: 10}}>
          #{id}
        </Text>

        {/* Pokebola Blanca */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={{...styles.pokeball}}
        />
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>
      {/* Detalles y Loading */}
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 300,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
  },
  backButton: {
    left: 0,
    zIndex: 99999,
  },
  pokemonName: {
    color: 'white',
    fontSize: 35,
    alignSelf: 'flex-end',
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: 10,
    opacity: 0.3,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -10,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
