import {View, Text, SectionList} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import styles from '../theme/appTheme';
import ItemSeparator from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Antman',
      'Thor',
      'Antman',
      'Thor',
      'Antman',
      'Thor',
      'Antman',
      'Thor',
      'Antman',
      'Thor',
      'Antman',
      'Thor',
      'Antman',
      'Thor',
      'Antman',
      'Thor',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Saitama',
    ],
  },
];

const CustomSectionList = () => {
  const [largo, setLargo] = useState(0);
  const {top} = useSafeAreaInsets();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  useEffect(() => {
    let contador = 0;
    casas.map(e => (contador = e.data.length + contador));
    setLargo(contador);
  }, []);

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => (
          <HeaderTitle title="Section List" margin={10} />
        )}
        ListFooterComponent={() => (
          <HeaderTitle
            title={'Number of characters: ' + largo}
            margin={20}
            size={18}
          />
        )}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        stickySectionHeadersEnabled // Para que el titulo se arrastre!
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: 20 + top,
                marginBottom: 20,
                color: colors.primary,
              }}>
              {section.casa}
            </Text>
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title="End List" margin={10} size={12} />
        )}
        // SectionSeparatorComponent={ItemSeparator}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default CustomSectionList;
