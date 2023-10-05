import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, Switch} from 'react-native';
import {BasecontainerProfile, ProfileButton} from 'components';
import {notif, changePass, mode, rightArrow, arrowLogout} from 'configs/Images';
import {useSelector} from 'react-redux';

const Profile = () => {
  const {auth} = useSelector(state => state);

  let isAdmin = auth?.data;

  return (
    <>
      <BasecontainerProfile />
      <View style={styles.header}>
        <Text style={styles.textProfile}>Pengaturan Akun</Text>
        <ProfileButton
          children="Ubah Password"
          image={changePass}
          arrow={rightArrow}
        />
        <Text style={styles.textProfile}>Pengaturan Aplikasi</Text>
        <ProfileButton children="Ubah Mode Gelap" image={mode} />
        <ProfileButton children="Notifikasi" image={notif} arrow={rightArrow} />
        <View style={styles.logout}>
          <Text style={styles.textLogout}>Keluar</Text>
          <Image source={arrowLogout} style={styles.logoutArrow} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: '6%',
    paddingHorizontal: '5%',
  },
  textProfile: {
    marginTop: 30,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    marginBottom: 10,
  },
  logout: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DADADA',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3%',
    height: 40,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: '60%',
  },
  textLogout: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#C4C4C4',
  },
  logoutArrow: {
    marginTop: '1%',
    marginRight: '2%',
    marginLeft: '2%',
  },
});

export default Profile;
