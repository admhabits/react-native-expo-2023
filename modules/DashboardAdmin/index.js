/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconFeather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconBadge from 'react-native-icon-badge';
import { changePass, notif, news, newsletter, ppid } from 'configs/Images';
import { useDispatch, useSelector } from 'react-redux';
import { postLogout } from '../../redux/login/login.actions';

let isOpen = false;
const DashboardAdmin = ({ navigation }) => {
  const dispatch = useDispatch();
  const { login } = useSelector(state => state)

  const [isChild, setChild] = useState({
    ppid: false,
  });

  useEffect(() => {
    isOpen = isChild.ppid;
  }, [isChild.ppid])
  
  const roles = new Set(login.data.roles);
  const isAdmin = roles.has(1);

  const onLogout = () => {
    dispatch(postLogout());
    navigation.navigate('Home');
  };

  const menu = () => (
    <LinearGradient
      colors={['#28A297', 'rgba(40, 162, 151, 0.5)']}
      style={styles.header}>
      <View style={{ width: '100%' }}>
        <View style={styles.headerNavigasi}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <IconFeather name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity >
          <Text style={{ color: '#fff', fontSize: 20 }}>Akun</Text>
          <TouchableOpacity style={{ marginLeft: 3 }} onPress={() => navigation.navigate('Notification')}>
            <IconBadge
              MainElement={<Icon name="bell" size={30} color="#fff" />}
              BadgeElement={<Text style={{ color: '#000', fontSize: 10, zIndex: 100, }}>1</Text>}
              IconBadgeStyle={{
                // width: 5,
                height: 17,
                left: 10,
                top: 0,
                positioin: 'absolute',
                backgroundColor: '#fff',
              }}
            //   Hidden={this.state.BadgeCount == 0}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <Text style={{ fontSize: 15, color: '#fff' }}>Admin Portal</Text>
          <Text style={{ fontSize: 13, opacity: 0.7, color: '#fff' }}>
            Admin@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.menu}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Pengaturan AKun</Text>
          {itemAkun.map((item, i) => (
            <View key={i}>
              {boxMenu(item.name, item.icon, null, item.path)}
            </View>
          ))}

          {
            isAdmin && (
              <>
                <Text style={{ ...styles.title, marginTop: 10 }}>Dashboard Admin</Text>
                {itemMenu.map((item, i) => (
                  <View key={i}>
                    {boxMenu(item.name, item.icon, item.child, item.path)}
                  </View>
                ))}

              </>
            )
          }
          <TouchableOpacity
            style={{ ...styles.boxKeluar, marginTop: 40 }}
            onPress={() => {
              onLogout();
            }}>
            <IconFeather
              name="log-out"
              size={17}
              color="#000"
              style={{ width: 30, opacity: 0.4 }}
            />
            <Text style={{ fontWeight: '500', opacity: 0.4 }}>Keluar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );

  const boxMenu = (name, icon, child, path) => {
    return (
      <>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            if (child) {
              setChild({ ...isChild, ppid: !isChild.ppid });
            } else {
              navigation.navigate(path);
            }
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: 25 }}>
              <Image source={icon} style={styles.iconBoxMenu} />
            </View>
            <Text style={{ fontWeight: '400' }}>{name}</Text>
          </View>
          <View>
            <Icon name="chevron-right" size={17} color="#000" />
          </View>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isChild.ppid
            ? child?.map((item, i) => (
              <TouchableOpacity
                style={styles.boxChild}
                key={i}
                onPress={() => {
                  navigation.navigate(item.path)
                }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={{ fontWeight: '400' }}>{item.name}</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={17} color="#000" />
                </View>
              </TouchableOpacity>

            ))
            : null}
        </ScrollView>
      </>
    );
  };

  return menu();
};

const itemAkun = [
  {
    name: 'Ubah Password',
    icon: changePass,
    path: 'DashboardAdmin',
  },
  {
    name: 'Pengaturan Notifikasi',
    path: 'DashboardAdmin',
    icon: notif,
  },
];

const itemMenu = [
  {
    name: 'Berita & Siaran',
    icon: news,
    path: 'ManagementAdminNewsAndBroadcast',
  },
  {
    name: 'Newsletter',
    icon: newsletter,
    path: 'Newsletter',
  },
  {
    name: 'PPID',
    icon: ppid,
    child: [
      {
        name: 'Informasi Berkala',
        path: 'ManagementPPIDPeriodically',
      },
      {
        name: 'Informasi Setiap Saat',
        path: 'ManagementPPIDAllTime',
      },
      {
        name: 'Informasi Serta Merta',
        path: 'ManagementPPIDNecessarily',
      },
      {
        name: 'PPID Perlu Diteruskan',
        path: 'ManagementPPIDNeedToBeStraightened',
      },
      {
        name: 'PPID Belum Direspon',
        path: 'ManagementPPIDNoResponseYet',
      },
      {
        name: 'PPID Perlu Diverifikasi',
        path: 'ManagementPPIDNeedVerification',
      },
    ],
  },
];

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    width: '50%',
  },
  underline: {
    width: '100%',
    marginTop: -6,
    height: 2,
    backgroundColor: '#000',
  },
  textInput: {
    height: 40,
    paddingLeft: -5,
    fontSize: 15,
    width: '50%',
  },
  button: {
    backgroundColor: 'red',
  },
  inputCheckbox: {
    marginTop: 8,
    marginLeft: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    height: '100%',
    width: '100%',
  },
  menu: {
    marginTop: 10,
    backgroundColor: '#fff',
    height: (()=> isOpen.ppid ? 0 : 900 )(),
    width: '100%',
    borderRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 15,
  },
  box: {
    width: '99%',
    display: 'flex',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 35,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  boxChild: {
    width: '90%',
    display: 'flex',
    marginLeft: 50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    height: 35,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxKeluar: {
    width: '99%',
    display: 'flex',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 35,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerNavigasi: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  profile: {
    fontSize: 24,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconBoxMenu: {
    width: 17,
    height: 17,
  },
});

export default DashboardAdmin;
