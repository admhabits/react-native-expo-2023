/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {iconHome, iconUser, logoInformasi} from 'configs/Images';

function Navigasi(props) {
  const {onClickMenuHome, onClickMenuUser, onClickMenuInformasi} = props;
  const {login} = useSelector(state => state);

  return (
    <View style={styles.outer}>
      <TouchableOpacity style={styles.menu} onPress={onClickMenuHome}>
        <Image source={iconHome} style={styles.iconMenu} />
        <Text style={styles.textMenu}>Home</Text>
      </TouchableOpacity>
      {/* {login.data.token === null || login.data.token === 'error' ? ( */}
      <TouchableOpacity
        style={styles.menuCenter}
        onPress={onClickMenuInformasi}>
        <Image source={logoInformasi} style={{width: '100%', height: '100%'}} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu} onPress={onClickMenuUser}>
        <Image source={iconUser} style={styles.iconMenu} />
        <Text style={styles.textMenu}>Akun</Text>
      </TouchableOpacity>
    </View>
  );
}

Navigasi.defaultProps = {
  user: 'user',
};

const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: '#28A297',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 2147483647,
  },
  menuCenter: {
    width: 70,
    borderRadius: 40,
    height: 70,
    marginTop: -40,
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMenu: {
    width: 30,
    height: 27,
  },
  textMenu: {
    color: '#fff',
    fontSize: 11,
  },
});

export default Navigasi;
