import {Header} from 'components';
import React from 'react';
import {View} from 'react-native';

const NewsAndBroadcast = ({navigation}) => {
  return (
    <View>
      <Header
        type={'back'}
        onPressBack={() => navigation.navigate('DashboardAdmin')}
        namePathBack={'Berita'}
      />
    </View>
  );
};

export default NewsAndBroadcast;
