/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Header, HeadTable } from 'components';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import getPPIDNeedForward from '../../../redux/ppidNeedForward/ppidNeedForward.actions';

const ManagementNeedToBeStraightened = ({ navigation }) => {
  const { login, ppidNeedForward } = useSelector(state => state);
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState([]);
  const [isSearch, setSearch] = useState('');
  const [isTotalDataShow, setTotalDataShow] = useState(10)

  useEffect(() => {
    dispatch(getPPIDNeedForward(login.data.token));
  }, [login.data.token]);

  useEffect(() => {
    let filter = ppidNeedForward?.data?.listData?.filter(item =>
      item.registrationNumber.toLowerCase().includes(isSearch.toLowerCase()),
    );
    setDataTable(filter);
  }, [isSearch]);

  useEffect(() => {
    setDataTable(ppidNeedForward?.data?.listData);
    console.log('CHECKING DATA PPID NEED FORWARD', ppidNeedForward?.data?.listData);
  }, [ppidNeedForward?.data?.listData]);

  const head = [
    {
      title: 'Nomor Registrasi',
      width: '29%',
    },
    { title: 'Tanggal', width: '19%' },
    { title: 'Permohonan', width: '29%' },
    {
      title: 'Aksi',
      width: '20%',
    },
  ];
  return (
    <>
      <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
        <Header
          onPressBack={() => navigation.navigate('DashboardAdmin')}
          type={'back'}
          namePathBack={'Manage PPID'}
          justifyContentTitle="flex-start"
        />
        <View style={styles.input}>
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
              placeholder={'Pencarian'}
              onChangeText={e => setSearch(e)}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text>Daftar PPID Perlu Diteruskan </Text>
        </View>
        <HeadTable data={head} backgroundColor={'#28A297'} textColor={'#fff'} />
        <ScrollView>
          {dataTable?.length === 0 ?
            <ActivityIndicator size="large" style={{ marginTop: 150 }} /> : dataTable?.length < 0 ?
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Text style={{ fontSize: 10, }}>Tidak ditemukan data</Text>
            </View> : null
          }
          {dataTable?.slice(0, isTotalDataShow).map((item, i) => (
            <View key={i}>
              <View
                key={i}
                style={{
                  display: 'flex',
                  marginHorizontal: 15,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginVertical: 7,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    const {  registrationNumber, question, answerDate, answerFile, createdAt, answer, microsite, id, phone, email, name} = item;
                    navigation.navigate('DetailPPID', {  registrationNumber, question, answerDate, answerFile, createdAt, answer, microsite, id, phone, email, name })
                  }}
                  style={{
                    marginHorizontal: '0.5%', width: '29%',
                  }}
                >
                  <Text
                    style={{ color: '#0089EC', fontSize: 8 }}>
                    {item?.registrationNumber}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{ marginHorizontal: '0.5%', fontSize: 8, width: '19%' }}>
                  {moment(item?.createdAt).format('YYYY-MM-DD HH:mm')}
                </Text>
                <Text
                  style={{ marginHorizontal: '0.5%', fontSize: 8, width: '29%' }}>
                  {item?.question}
                </Text>
                <View
                  style={{
                    marginHorizontal: '0.5%',
                    fontSize: 8,
                    width: '19%',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      const { id } = item;
                      navigation.navigate('CreateManagementPPIDNeedToBeStraightened', { id })
                    }}
                    style={{ ...styles.button, backgroundColor: '#0089EC' }}>
                    <Icon name="reply" size={6} color="#fff" />
                    <Text style={{ fontSize: 8, color: '#fff', marginLeft: 2 }}> Respon </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.line} />
            </View>
          ))}

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              width: '100%',
            }}>
            {dataTable?.length > 0 ? (
              <TouchableOpacity
                onPress={() => setTotalDataShow(isTotalDataShow + 10)}
                style={{
                  backgroundColor: '#0089EC',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    borderRadius: 30,
                    color: '#fff',
                    fontSize: 10,
                    display: isSearch !== '' || dataTable.length === 0 ? 'none' : null
                  }}>
                  Load More
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
    height: 30,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  button: {
    width: 60,
    height: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 1,
    paddingVertical: 2,
  },
  line: {
    // width: '100%',
    // height: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.25)',
    // marginHorizontal: 20,
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
  },
});

export default ManagementNeedToBeStraightened;

