import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {backArrow} from 'configs/Images';

const HeaderProfile = props => {
  const {onPressBack} = props;
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={onPressBack}>
          <Image source={backArrow} />
        </TouchableOpacity>
        <Text style={styles.text}>Profile</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#28A297',
    height: '7%',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
    marginBottom: '11%',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    color: 'white',
    marginLeft: '5%',
  },
});

export default HeaderProfile;
