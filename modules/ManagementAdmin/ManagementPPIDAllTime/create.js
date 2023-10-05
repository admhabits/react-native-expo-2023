/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { BaseContainerManagementAdmin } from 'components';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import { BaseUrl } from '../../../utils/Constants';
// import CheckBox from '@react-native-community/checkbox';
import RNFS from 'react-native-fs';
import { FormStyles } from 'shared';

const CreateManagementAdminAllTime = ({ navigation, route }) => {
  const { login } = useSelector(state => state);
  const { params } = route;
  const [filePath, setFilePath] = useState({});
  const [commentStatus, SetCommentStatus] = useState('');
  const [base, setBase] = useState('');
  const [postStatus, SetPostStatus] = useState('draft');
  const [postContent, setPostContent] = useState('');
  const [desc, setPostExcerpt] = useState('');
  const [fileName, setFileName] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [isCheckBox, setCheckBox] = useState({
    berita: false,
    siaran: false,
    pengumuman: false,
  });

  const token = login.data.token;

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
      base64File: base,
      commentStatus: commentStatus,
      postContent: postContent,
      postExcerpt: desc,
      postStatus: postStatus,
      postTitle: title,
      author: author
    };
    console.log('cek data input', data);
    await axios
      .post(BaseUrl + '/api/ppid-setiap-saat/create', data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        console.log('berhasil add', res);
        navigation.navigate('ManagementPPIDAllTime')
      })
      .catch(err => {
        console.log('ini error', err);
      });
  };


  const handleUpdate = async () => {
    const data = {
      base64File: base,
      commentStatus: commentStatus,
      postExcerpt: desc,
      postStatus: postStatus,
      postTitle: title,
      postId: params.postId,
      author: author,
    };
    console.log('CHECK DATA UPDATE FORM', JSON.stringify(data, null, 3));

    const token = login.data.token;
    await axios
      .post(`${BaseUrl}/api/ppid-setiap-saat/update`, data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        console.log('CHECK RESPONSE UPDATE', JSON.stringify(res.data, null, 3));
        navigation.navigate('ManagementPPIDAllTime');
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
      title={'Tambah Informasi Publik Setiap Saat'}
      namePathBack={'Manage PPID'}
      onPressBack={() => navigation.navigate('ManagementPPIDAllTime')}>
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
              value={desc}
              multiline={true}
              numberOfLines={2}
              style={styles.textInputArea}
              onChangeText={value => setPostExcerpt(value)}
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
                value={postStatus}
                items={[
                  { label: 'PUBLISH', value: 'publish' },
                  { label: 'DRAFT', value: 'draft' },
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
                  onPress={() => chooseFile('photo')}>
                  <Text style={{ fontSize: 8, color: '#fff' }}>Pilih File</Text>
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
            onPress={() => navigation.navigate('ManagementPPIDAllTime')}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseContainerManagementAdmin>
  );
};

const styles = StyleSheet.create(FormStyles);

export default CreateManagementAdminAllTime;
