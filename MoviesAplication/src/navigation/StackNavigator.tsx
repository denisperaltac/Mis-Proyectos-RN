import {createStackNavigator} from '@react-navigation/stack';
import {Movie} from '../interfaces/movieInterface';
import DetailScreen from '../Screens/DetailsScreen';
import HomeScreen from '../Screens/HomeScreen';

export type RootStackParams = {
  Home: undefined;
  Details: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
