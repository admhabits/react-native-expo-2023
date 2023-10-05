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
// import { RNToasty } from 'react-native-toasty';
import { useSelector, useDispatch } from 'react-redux';
import { Header, HeadTable, ModalDelete } from 'components';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getPPIDNecessarily } from '../../../redux/ppidNecessarily/ppidNecessarily.actions';

const ManagementPPIDNecessarily = ({ navigation }) => {
  const { login, necessarilyPPID } = useSelector(state => state);
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState([]);
  const [isSearch, setSearch] = useState('');
  const [isTotalDataShow, setTotalDataShow] = useState(10);

  const [isParamDelete, setParamDelete] = useState({
    postId: null,
  });
  const [isModalShowDelete, setModalShowDelete] = useState(false);
  let token = login?.data?.token;

  useEffect(() => {
    dispatch(getPPIDNecessarily({
      token: login?.data?.token,
      search: isSearch
    }));
  }, [login.data.token, isTotalDataShow]);

  useEffect(() => {
    dispatch(getPPIDNecessarily({
      token: login?.data?.token,
      search: isSearch
    }));
    let filter = necessarilyPPID?.data?.listData?.filter(item =>
      item.postTitle.toLowerCase().includes(isSearch.toLowerCase()),
    );
    setDataTable(filter);
  }, [isSearch]);

  useEffect(() => {
    setDataTable(necessarilyPPID?.data?.listData);
  }, [necessarilyPPID?.data?.listData]);

  const head = [
    {
      title: 'Judul',
      width: '34%',
    },
    { title: 'Author', width: '14%' },
    { title: 'Status', width: '14%' },
    { title: 'Tanggal', width: '14%' },
    {
      title: 'Aksi',
      width: '20%',
    },
  ];

  const onCancelPressed = () => {
    setModalShowDelete(false);
  };

  const onDelete = value => {
    setModalShowDelete(true);
    setParamDelete({
      postId: value.postId,
      termTaxonomyId: value.termTaxonomyId,
    });
  };

  const output = value => {
    if (value === 'SUCCESS') {
      // RNToasty.Success({
      //   title: 'Data berhasil di hapus',
      //   position: 'center',
      // });
      dispatch(getPPIDNecessarily(token));
    } else {
      // RNToasty.Error({
      //   title: 'Data gagal di hapus',
      //   position: 'center',
      // });
    }
  };

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
          <Text>Daftar Informasi Publik Serta Merta</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CreateManagementPPIDNecessarily')
            }
            style={{
              ...styles.button,
              backgroundColor: '#0089EC',
              width: 60,
              height: 20,
              borderRadius: 3,
              padding: 2,
            }}>
            <Icon name="plus" size={6} color="#fff" />
            <Text style={{ fontSize: 10, color: '#fff' }}> Tambah</Text>
          </TouchableOpacity>
        </View>
        <HeadTable data={head} backgroundColor={'#28A297'} textColor={'#fff'} />
        <ScrollView>
          {dataTable?.length < 1 ? <ActivityIndicator size="large" style={{ marginTop: 150 }} /> : null}
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
                <Text
                  style={{
                    marginHorizontal: '0.5%',
                    fontSize: 8,
                    width: '34%',
                    textTransform: 'uppercase'
                  }}>
                  {item?.postTitle}
                </Text>
                <Text
                  style={{ marginHorizontal: '0.5%', fontSize: 8, width: '14%', textAlign: 'center' }}>
                  {item?.author}
                </Text>
                <Text
                  style={{ marginHorizontal: '0.5%', fontSize: 8, width: '14%', textAlign: 'center' }}>
                  {item?.postStatus}
                </Text>
                <Text
                  style={{ marginHorizontal: '0.5%', fontSize: 8, width: '14%', textAlign: 'center' }}>
                  {moment(item?.tanggal).format('YYYY-MM-DD HH:mm')}
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
                    onPress={
                      () => {
                        const { postId, postTitle, tanggal, fileName, postExcerpt, author, postStatus } = item;
                        navigation.navigate('CreateManagementPPIDNecessarily', { postId, postTitle, tanggal, fileName, postExcerpt, author, postStatus })
                      }
                    }
                    style={{ ...styles.button, backgroundColor: '#0089EC' }}>
                    <Icon name="edit" size={6} color="#fff" />
                    <Text style={{ fontSize: 8, color: '#fff' }}> Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onDelete(item)}
                    style={{ ...styles.button, backgroundColor: '#FF5454' }}>
                    <Icon name="trash-alt" size={6} color="#fff" />
                    <Text style={{ fontSize: 8, color: '#fff' }}> Hapus</Text>
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
        <ModalDelete
          title={'Apakah anda yakin ingin menghapus data PPID setiap saat?'}
          confirm={'Iya'}
          cancle={'Tidak'}
          isActive={isModalShowDelete}
          onCancelPressed={() => onCancelPressed()}
          path={`/api/ppid-serta-merta/delete?postId=${isParamDelete.postId}`}
          output={output}
        />
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
    width: 35,
    height: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 1,
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

export default ManagementPPIDNecessarily;
