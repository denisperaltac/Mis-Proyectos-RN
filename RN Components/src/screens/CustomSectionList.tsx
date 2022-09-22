import {View, Text, SectionList} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import styles from '../theme/appTheme';
import ItemSeparator from '../components/ItemSeparator';

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
        renderItem={({item}) => <Text style={{color: 'black'}}>{item}</Text>}
        stickySectionHeadersEnabled // Para que el titulo se arrastre!
        renderSectionHeader={({section}) => (
          <HeaderTitle title={section.casa} margin={10} size={25} />
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
