import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {backgroundHeader, backArrow, notification} from 'configs/Images';

const BasecontainerProfile = () => {
  return (
    <>
      <Image source={backgroundHeader} style={styles.header} />
      <View style={styles.subheader}>
        <Image source={backArrow} style={styles.backArrow} />
        <Text style={styles.akun}>Akun</Text>
        <Image source={notification} style={styles.notification} />
      </View>
      <View style={styles.information}>
        <Text style={styles.name}>Juniarti</Text>
        <Text style={styles.email}>juniarti111@gmail.com</Text>
        <Text style={styles.email}>08982214xxxx</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: -150,
  },
  subheader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    alignContent: 'center',
    top: '8%',
  },
  backArrow: {
    width: 20,
  },
  akun: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  notification: {
    width: 20,
  },
  information: {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  email: {
    fontSize: 10,
    color: 'white',
    fontWeight: '400',
    marginTop: 10,
  },
});

export default BasecontainerProfile;
