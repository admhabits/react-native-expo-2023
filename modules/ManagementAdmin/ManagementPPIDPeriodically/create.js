/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { BaseContainerManagementAdmin } from 'components';
import RNPickerSelect from 'react-native-picker-select';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import { BaseUrl } from '../../../utils/Constants';
// import CheckBox from '@react-native-community/checkbox';
import { useSelector } from 'react-redux';
import { FormStyles } from 'shared';
import RNFS from 'react-native-fs';


const ManagementAdminNewsAndBroadcast = ({ navigation, route }) => {
  const { params } = route;
  const { login } = useSelector(state => state);
  const [filePath, setFilePath] = useState({});
  const [isCheckBox, setCheckBox] = useState({
    berita: false,
    siaran: false,
    pengumuman: false,
  });

  const [commentStatus, SetCommentStatus] = useState(1);
  const [base, setBase] = useState('');
  const [upload, setUpload] = useState([]);
  const [postStatus, SetPostStatus] = useState('draft');
  const [author, setAuthor] = useState('');
  const [postExcerpt, setPostExcerpt] = useState('');
  const [title, setTitle] = useState('');
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    setAuthor("Alam Wibowo");
    if (params) {
      console.log('CHEK DATA PARAMS DARI EDIT ACTION', JSON.stringify(params, null, 3));
      setTitle(params.postTitle)
      SetPostStatus(params.postStatus)
      setPostExcerpt(params.postExcerpt)
      setAuthor(params.author);
      setFileName(params.fileName);
    }
  }, [])
  const handleSubmit = async () => {
    const data = {
      base64: base,
      commentStatus: commentStatus,
      postExcerpt: postExcerpt,
      author: author,
      postStatus: postStatus,
      postTitle: title,
    };
    console.log('cek data input', JSON.stringify(data, null, 3));

    const token = login.data.token;
    await axios
      .post(BaseUrl + '/api/ppid-berkala/create', data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        console.log('CHECK RESPONSE PPID BERKALA DITAMBAHKAN', JSON.stringify(res.data, null, 3));
        navigation.navigate('ManagementPPIDPeriodically');
      })
      .catch(err => {
        console.log('ini error', err);
      });
  };

  const handleUpdate = async () => {
    const data = {
      base64: base,
      commentStatus: commentStatus,
      postExcerpt: postExcerpt,
      postStatus: postStatus,
      postTitle: title,
      postId: params.postId
    };
    console.log('CHECK DATA UPDATE FORM', JSON.stringify(data, null, 3));

    const token = login.data.token;
    await axios
      .post(`${BaseUrl}/api/ppid-berkala/update`, data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        console.log('CHECK RESPONSE UPDATE', JSON.stringify(res.data, null, 3));
        navigation.navigate('ManagementPPIDPeriodically');
      })
      .catch(err => {
        console.log('SHOW ERROR', err);
      });
  };


  const base64code = async (objectImage) => {
    await RNFS.readFile(objectImage, "base64")
      .then((res) => {
        //  res = "data:" + objectImage.type + ";" + "base64," + res;
        //  console.log("BASE 64 FILE", res);
        setBase(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode === 'others') {
        alert(response.errorMessage);
        return;
      }
      const objectImage = response.assets[0];
      console.log('uri -> ', JSON.stringify(objectImage.uri, null, 3));

      base64code(objectImage.uri);
      setFileName(objectImage.fileName)
    });
  };
  return (
    <BaseContainerManagementAdmin
      title={'Tambah Informasi Publik Berkala'}
      namePathBack={'Manage PPID'}
      onPressBack={() => navigation.navigate('ManagementPPIDPeriodically')}>
      <View style={{ marginHorizontal: 15 }}>
        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Judul</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              value={title}
              onChangeText={title => setTitle(title)}
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Deskripsi</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              multiline={true}
              numberOfLines={2}
              style={styles.textInputArea}
              value={postExcerpt}
              onChangeText={postExcerpt => setPostExcerpt(postExcerpt)}
            />
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Status</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.textInputSelect}>
              <RNPickerSelect
                onValueChange={value => SetPostStatus(value)}
                itemsStyle={{ fontSize: 6 }}
                value={postStatus}
                items={[
                  { label: 'PUBLISH', value: "publish" },
                  { label: 'DRAFT', value: "draft" },
                ]}
              />
            </View>
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Upload Gambar</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.textInputFile}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.inputFile}
                  value={fileName}
                  onPress={() => chooseFile('photo')}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Pilih File</Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 5 }}>{fileName != undefined && fileName.length > 40 ? fileName.substring(40) : fileName}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.actionButton}>
          <TouchableOpacity
            style={{ ...styles.btn, backgroundColor: '#0089EC' }}
            onPress={params ? handleUpdate : handleSubmit}>
            <Text style={{ color: '#fff', fontWeight: '400' }}>{params ? "Update" : "Simpan"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.btn, backgroundColor: '#FF5454' }}
            onPress={() => navigation.navigate('ManagementPPIDPeriodically')}>
            <Text style={{ color: '#fff', fontWeight: '400' }}>Batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseContainerManagementAdmin>
  );
};

const styles = StyleSheet.create(FormStyles);

export default ManagementAdminNewsAndBroadcast;
