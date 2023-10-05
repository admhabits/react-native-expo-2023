/* eslint-disable react-native/no-inline-styles */
import { Header, Table } from 'components';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getPPIDAllTime } from '../../redux/publicPPIDAllTime/action';
import { BaseUrl } from '../../utils/Constants';
import { DownloadFunc } from 'shared';


const InformasiPublik = ({ navigation }) => {
  const head = ['Judul', 'Lampiran'];
  const dispatch = useDispatch();
  const [listData, setListData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [isSearch, setSearch] = useState('');
  const [isTotalDataShow, setTotalDataShow] = useState(10);

  const { login } = useSelector(state => state);
  const { data } = useSelector((state) => state?.public);
  let allTimePPID = [];
  const createElementTable = (data) => {
    data.map((val, key) => {
      const { postId, postTitle, fileName } = val;
      const fileURI = `${BaseUrl}/storage/ppid-informasi/${postId}/${fileName}`;
      // console.log(fileURI);
      let element = [postTitle,
        <TouchableOpacity
          onPress={() => DownloadFunc(fileURI)}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <Icon name="download" size={17} color="#0089EC" />
        </TouchableOpacity>
      ];
      allTimePPID.push(element);
    })
   
  }

  useEffect( () => {
    dispatch(getPPIDAllTime({
      token: login?.data?.token,
      search: isSearch
    }))
  }, [login?.data?.token, isTotalDataShow]);

  useEffect( () => {
    createElementTable(data?.listAllTime);
    setDataTable(allTimePPID);
  }, [data?.listAllTime]);

  useEffect(() => {
    let filter = data?.listAllTime?.filter((item) =>
      item.postTitle.toLowerCase().includes(isSearch.toLowerCase()),
    );
    createElementTable(filter);
    setDataTable(allTimePPID);
  }, [isSearch]);

  // console.log(JSON.stringify(dataTable, null, 4))

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <Header
        onPressBack={() => navigation.navigate('Home')}
        type={'back'}
        namePathBack={'Informasi Publik'}
        justifyContentTitle="flex-start"
      />
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <View style={styles.input}>
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
              placeholder={'Pencarian'}
              onChangeText={e => setSearch(e)}
            />
          </View>
        </View>

        {/* <View style={{ paddingHorizontal: 15, flex: 0 }}>
          <View style={styles.form}>
            <View style={styles.textInputSelect}>
              <RNPickerSelect
                onValueChange={value => console.log(value)}
                value={'publish'}
                items={[
                  { label: 'PUBLISH', value: 'publish' },
                  { label: 'DRAFT', value: 'draft' },
                ]}
              />
            </View>
          </View>
        </View> */}
      </View>
      {
        dataTable.length === 0 ? (
          <ActivityIndicator style={{ marginTop: 150 }} />
        ) : (
          <Table
            isTotalDataShow={isTotalDataShow}
            head={head}
            setTotalDataShow={setTotalDataShow}
            dataTable={dataTable}
            isSearch={isSearch}
            flexArr={[8, 2]}
            setDataTable={setDataTable}
            tableHeadColor={'#28A297'}
            tableHeadTextColor={'#fff'}
          />
        )
      }

    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#28A297',
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 14,
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    // marginBottom: 10,
  },
  textInputSelect: {
    // borderWidth: 1,
    height: 30,
    display: 'flex',
    // borderColor: '#28A297',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // marginBottom: 10,
    width: 150,
    alignSelf: 'flex-end',
  },
  input: {
    paddingHorizontal: 15,
    // paddingTop: 20,
    flex: 1,
  },
  inputSelect: {
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default InformasiPublik;
