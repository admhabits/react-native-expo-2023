/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { Header } from 'components';
import moment from 'moment';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SwitchToggle from 'react-native-switch-toggle';
import NotifLogo from '../../assets/images/notif-logo.png';

const Notifikasi = ({ navigation }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false)
  const [activeUpdate, setActiveUpdate] = useState(false)
  const [dataTable, setDataTable] = useState([]);
  const handleAktifitas = () => {
    setActiveUpdate(false)
    setActive(!active)
  }
  const handlePembaharuan = () => {
    setActive(false);
    setActiveUpdate(!activeUpdate)
  }
  return (
    <>
      <Header
        onPressBack={() => navigation.navigate('DashboardAdmin')}
        type={'back'}
        namePathBack={'Notification'}
        justifyContentTitle="flex-start"
      />
      <View style={styles.containerMenu}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => handleAktifitas}>
            <Text style={active === true ? styles.textActive : styles.text}>Aktifitas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePembaharuan}>
            <Text style={styles.textActive}>Pembaharuan</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'column' }}>
        <View style={styles.box}>
          <View style={{ flex: 1 }}>
            <Image source={NotifLogo} />
          </View>
          <View style={styles.boxNotif}>
            <Text style={styles.heading}>Pengumuman</Text>
            <Text style={styles.content}>
              Etiam turpis fames id velit nunc eget pellentesque eu purus. Commodo iaculis ut tellus, volutpat, faucibus.
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={{ flex: 1 }}>
            <Image source={NotifLogo} />
          </View>
          <View style={styles.boxNotif}>
            <Text style={styles.heading}>Pengumuman</Text>
            <Text style={styles.content}>
              Etiam turpis fames id velit nunc eget pellentesque eu purus. Commodo iaculis ut tellus, volutpat, faucibus.
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={{ flex: 1 }}>
            <Image source={NotifLogo} />
          </View>
          <View style={styles.boxNotif}>
            <Text style={styles.heading}>Pengumuman</Text>
            <Text style={styles.content}>
              Etiam turpis fames id velit nunc eget pellentesque eu purus. Commodo iaculis ut tellus, volutpat, faucibus.
            </Text>
          </View>
        </View>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  containerMenu: {
    backgroundColor: '#28A297',
    marginVertical: 15,
    marginHorizontal: 80,
    borderRadius: 5,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 12,
    paddingVertical: 2,
  },
  text: {
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: 'center',
  },
  textActive: {
    backgroundColor: '#0089EC',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: 'center',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  boxNotif: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
    flex: 3,
    width: '100%',
    paddingHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 5
  },
  heading: {
    fontWeight: "500",
    marginBottom: 2,
    fontSize: 13,
  },
  content: {
    fontSize: 12,
  }
});

export default Notifikasi;
