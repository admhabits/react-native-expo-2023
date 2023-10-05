/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {iconCalender} from 'configs/Images';

const CardProfile = props => {
  const {title, name, ket, fileName} = props;
  console.log('https://hubla.dephub.go.id/storage/profile_ppid/${fileName}');
  return (
    <View style={styles.outer}>
      <View style={styles.images}>
        <Image
          source={{
            uri: `https://hubla.dephub.go.id/storage/profile_ppid/${fileName}`,
          }}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: 200,
            maxHeight: 200,
          }}
        />
      </View>
      <Text style={{fontSize: 12, marginTop: 10, fontWeight: 'bold'}}>
        {title}
      </Text>
      <Text style={{fontSize: 12, marginTop: 10}}> {name}</Text>
      <Text style={{fontSize: 12, marginTop: 10, textAlign: 'justify'}}>
        {ket}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 25,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#28A297',
    marginTop: 10,
  },
  images: {
    width: 80,
    height: 100,
    backgroundColor: 'gray',
  },
});

export default CardProfile;
