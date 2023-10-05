import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Header } from 'components';

const BaseContainerManagementAdmin = props => {
  const { onPressBack, namePathBack, children, title } = props;
  return (
    <View>
      <Header
        type={'back'}
        onPressBack={onPressBack}
        namePathBack={namePathBack}
        isArrowBack={false}
        justifyContentTitle="center"
      />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ height: 50 }} />
        <Text style={styles.title}>{title}</Text>
        {children}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 15,
    marginHorizontal: 15,
    textTransform: 'uppercase',
    backgroundColor: '#e8e6e6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 2,
  },
});

export default BaseContainerManagementAdmin;
