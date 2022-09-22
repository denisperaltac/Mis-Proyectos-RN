import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Cast} from '../interfaces/creditsInterface';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  cast: Cast;
  height?: number;
  width?: number;
}

const CreditCard = ({cast, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;

  const navigation = useNavigation();
  return (
    <View>
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
          // onPress={() => navigation.navigate('Details' as never, movie as never)}
          activeOpacity={0.8}
          style={{width, height, marginRight: 5, paddingRight: 7}}>
          <View style={stylesCard.imageContainer}>
            <Image source={{uri}} style={stylesCard.image} />
          </View>
        </TouchableOpacity>
      </DropShadow>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 10,
        }}>
        {cast.name}
      </Text>
    </View>
  );
};

export default CreditCard;

const stylesCard = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
  },
});
