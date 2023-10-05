/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {
  iconMenuDocument,
  iconMenuHubungi,
  iconMenuLainnya,
  iconMenuLayanan,
  iconMenuPeraturan,
  iconMenuPerjanjian,
  iconMenuProfile,
} from '../../configs/Images';

const Menu = props => {
  const {
    onPressProfile,
    onPressHubungi,
    onPressPerjanjian,
    onPressLayanan,
    onPressPeraturan,
    onPressDokumen,
    onPressLainnya,
  } = props;
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <TouchableOpacity style={styles.menu} onPress={onPressProfile}>
          <Image source={iconMenuProfile} style={{width: 20, height: 16}} />
          <Text style={styles.textMenu}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={onPressHubungi}>
          <Image source={iconMenuHubungi} style={{width: 20, height: 16}} />
          <Text style={styles.textMenu}>Hubungi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={onPressPerjanjian}>
          <Image source={iconMenuPerjanjian} style={styles.iconMenu} />
          <Text style={styles.textMenu}>Perjanjian</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressLayanan}>
          <Image
            source={iconMenuLayanan}
            style={{
              width: 60,
              height: 60,
              borderRadius: 29,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#28A297',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={onPressPeraturan}>
          <Image source={iconMenuPeraturan} style={styles.iconMenu} />
          <Text style={styles.textMenu}>Peraturan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={onPressDokumen}>
          <Image source={iconMenuDocument} style={{width: 14, height: 17}} />
          <Text style={styles.textMenu}>Document</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={onPressLainnya}>
          <Image source={iconMenuLainnya} style={{width: 17, height: 17}} />
          <Text style={styles.textMenu}>Lainnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  outer: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
  },
  inner: {
    width: '91%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#28A297',
    flexDirection: 'row',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMenu: {
    width: 20,
    height: 18,
  },
  textMenu: {
    color: '#28A297',
    fontSize: 8,
    fontFamily: 'Roboto-Regular',
  },
});
export default Menu;
