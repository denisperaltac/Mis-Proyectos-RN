import React, {useState} from 'react';
import {ScrollView, RefreshControl} from 'react-native';

export const Refresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
    }, 3000);
  };

  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      progressViewOffset={50}
      colors={['green', 'red', 'blue']}
    />
  );
};
