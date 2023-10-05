/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { Header, HeadTable } from 'components';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { ModalDelete } from '../../../components';
import { getDataBeritaDanSiaran, deleteDataBeritaDanSiaran } from '../../../redux/beritaDanSiaran/beritaDanSiaran.actions';

const ManagementAdminNewsAndBroadcast = ({ navigation }) => {
  const { login, beritaDanSiaran } = useSelector(state => state);
  const dispatch = useDispatch();
  const [isTotalDataShow, setTotalDataShow] = useState(10);
  const [dataTable, setDataTable] = useState([]);
  const [isSearch, setSearch] = useState('');
  const [isParamDelete, setParamDelete] = useState({
    postId: null,
    termTaxonomyId: null,
  });
  const [isModalShowDelete, setModalShowDelete] = useState(false);

  useEffect(() => {
    dispatch(getDataBeritaDanSiaran({
      token: login?.data?.token,
      search: isSearch,
      isTotalDataShow
    }));
  }, [login?.data?.token, isTotalDataShow]);

  useEffect(() => {
    dispatch(getDataBeritaDanSiaran({
      token: login?.data?.token,
      search: isSearch,
      isTotalDataShow
    }));
    let filter = beritaDanSiaran?.data?.listData?.filter(item =>
      item.postTitle.toLowerCase().includes(isSearch.toLowerCase()),
    );
    setDataTable(filter);
  }, [isSearch]);

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
      dispatch(getDataBeritaDanSiaran({
        token: login?.data?.token,
        search: isSearch,
        isTotalDataShow
      }));
    } else {
      // RNToasty.Error({
      //   title: 'Data gagal di hapus',
      //   position: 'center',
      // });
    }

  };

  const head = [
    {
      title: 'Judul',
      width: '34%',
    },
    { title: 'Author', width: '14%' },
    { title: 'Kategori', width: '14%' },
    { title: 'Tanggal', width: '14%' },
    {
      title: 'Aksi',
      width: '20%',
    },
  ];

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <Header
        onPressBack={() => navigation.navigate('DashboardAdmin')}
        type={'back'}
        namePathBack={'Berita & Siaran Pers'}
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
        <Text>Daftar Berita &amp; Siaran Pers</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CreateManagementAdminNewsAndBroadcast')
          }
          style={{
            ...styles.button,
            backgroundColor: '#0089EC',
            width: 60,
            height: 20,
            borderRadius: 3,
            padding: 2,
          }}>
          <Icon name="plus" size={8} color="#fff" />
          <Text style={{ fontSize: 10, color: '#fff' }}>Tambah</Text>
        </TouchableOpacity>
      </View>
      <HeadTable data={head} backgroundColor={'#28A297'} textColor={'#fff'} />
      <ScrollView>
        {dataTable?.length !== 0 ?
          dataTable?.slice(0, isTotalDataShow).map((item, i) => {
            if (1 < 10) {
              return (
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
                      }}>
                      {item?.postTitle}
                    </Text>
                    <Text
                      style={{
                        marginHorizontal: '0.5%',
                        fontSize: 8,
                        width: '14%',
                      }}>
                      {item?.author}
                    </Text>
                    <Text
                      style={{
                        marginHorizontal: '0.5%',
                        fontSize: 8,
                        width: '14%',
                        textAlign: 'center'
                      }}>
                      {item?.kategori}
                    </Text>
                    <Text
                      style={{
                        marginHorizontal: '0.5%',
                        fontSize: 8,
                        width: '14%',
                        textAlign: 'center'
                      }}>
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
              );
            }
          })
          : <ActivityIndicator size="large" style={{ marginTop: 150, }} />

        }

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
        <ModalDelete
          title={'Apakah anda yakin ingin menghapus data berita atau siaran?'}
          confirm={'Iya'}
          cancle={'Tidak'}
          isActive={isModalShowDelete}
          onCancelPressed={() => onCancelPressed()}
          path={`/api/post/delete?objectId=${isParamDelete.postId}&termTaxonomyId=${isParamDelete.termTaxonomyId}`}
          output={output}
        />
      </ScrollView>
    </View>
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

export default ManagementAdminNewsAndBroadcast;
