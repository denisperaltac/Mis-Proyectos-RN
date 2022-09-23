import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useState, useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import styles from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={50}
          // progressBackgroundColor="lightgrey"
          colors={[colors.primary, colors.secundary]}
          title="Reload"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
