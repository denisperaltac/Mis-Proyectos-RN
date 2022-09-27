import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}
const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation<any>();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
    }).then(colors => {
      if (!isMounted.current) return;
      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'grey');
      }
      return () => {
        isMounted.current = false;
      };
    });
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }>
      <View style={{...styles.cardContainer, backgroundColor: bgColor}}>
        <View>
          <Text style={styles.name}>
            {pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.slice(1)}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    height: 120,
    width: windowWidth * 0.4,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 5,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,

    overflow: 'hidden',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -5,
    bottom: -5,
  },
});
