import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import styles from '../theme/appTheme';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

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
          colors={['green', 'red', 'blue']}
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
