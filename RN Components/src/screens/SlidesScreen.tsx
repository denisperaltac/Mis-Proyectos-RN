import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import useAnimation from '../hooks/useAnimation';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: any;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Exs amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const {opacity, FadeIn} = useAnimation();
  const navigation = useNavigation();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: screenWidth - 100,
            height: 300,
            resizeMode: 'center',
          }}
        />
        <Text
          style={{
            color: colors.primary,
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'flex-start',
          }}>
          {item.title}
        </Text>
        <Text
          style={{color: colors.text, fontSize: 15, alignSelf: 'flex-start'}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  useEffect(() => {
    if (activeIndex === items.length - 1) {
      setIsVisible(true);
      FadeIn();
    }
  }, [activeIndex]);

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />
      <View style={styles.containerFooter}>
        <View style={styles.viewContain} />
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{width: 20, backgroundColor: colors.primary}}
        />
        {isVisible ? (
          <Animated.View style={{opacity}}>
            <TouchableOpacity
              style={{...styles.touchable, backgroundColor: colors.primary}}
              activeOpacity={0.8}>
              <Icon
                name="chevron-forward-outline"
                color="white"
                size={30}
                onPress={() => navigation.navigate('Home' as never)}
              />
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <View style={styles.viewContain} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',

    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContain: {
    width: 40,
    backgroundColor: 'transparent',
    height: 40,
  },
  containerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 50,
  },
});
