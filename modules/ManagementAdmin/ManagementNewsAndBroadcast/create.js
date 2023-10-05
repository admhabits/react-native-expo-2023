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
// import { RNToasty } from 'react-native-toasty';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import { BaseUrl } from '../../../utils/Constants';
import CheckBox from '@react-native-community/checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { FormStyles } from 'shared';
import RNFS from 'react-native-fs';

const CreateManagementAdminNewsAndBroadcast = ({ navigation }) => {
  const { login, beritaDanSiaran } = useSelector(state => state);
  const dispatch = useDispatch();
  const [filePath, setFilePath] = useState({});
  const [fileName, setFileName] = useState('');
  const [isCheckBox, setCheckBox] = useState({
    berita: false,
    siaran: false,
    pengumuman: false,
  });

  const [commentStatus, SetCommentStatus] = useState(1);
  const [base, setBase] = useState('');
  const [postStatus, SetPostStatus] = useState('draft');
  const [postContent, setPostContent] = useState('');
  const [postExpert, setPostExpert] = useState('');
  const [title, setTitle] = useState('');

  let token = login?.data?.token;

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    const base64code = async (objectImage) => {
     await RNFS.readFile(objectImage.uri, "base64")
        .then((res) => {
          res = "data:" + objectImage.type + ";" + "base64," + res;
          console.log("BASE 64 FILE", res);
          return res;
        })
        .catch((err) => {
          console.log(err);
        })
    } 
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
      
      setBase(base64code(objectImage));
      setFileName(objectImage.fileName);
    });
  };

  const handleSubmit = async () => {
    const data = {
      base64File: base,
      commentStatus: commentStatus,
      postContent: postContent,
      postExcerpt: postExpert,
      postStatus: postStatus,
      postTitle: title,
      taxonomyIdList: [6],
    };
    await axios
      .post(BaseUrl + '/api/post/create', data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        console.log('berhasil add', res);
        // RNToasty.Success({
        //   title: 'Data berhasil di tambahkan',
        //   position: 'center',
        // });
        navigation.navigate('ManagementAdminNewsAndBroadcast');
      })
      .catch(err => {
        // RNToasty.Error({
        //   title: 'Data gagal di tambahkan',
        //   position: 'center',
        // });
        console.log('ini error', err);
      });
  };

  return (
    <BaseContainerManagementAdmin
      title={'Tambah Berita dan Siaran Pers'}
      namePathBack={'Berita dan Siaran'}
      onPressBack={() => navigation.navigate('DashboardAdmin')}>
      <View style={{ marginHorizontal: 15 }}>
        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Judul</Text>
          </View>
          <View style={styles.form}>
            <TextInput style={styles.textInput} onChangeText={e => setTitle(e)} />
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Ringkasan</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              multiline={true}
              numberOfLines={3}
              style={{ ...styles.textInputArea, paddingTop: 5 }}
              onChangeText={e => setPostExpert(e)}
            />
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Isi</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              multiline={true}
              numberOfLines={5}
              style={styles.textInputArea}
              onChangeText={e => setPostContent(e)}
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
        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Kategori</Text>
          </View>
          <View style={styles.form}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',

                flexWrap: 'wrap',
              }}>
              <View style={styles.textInputCheckbox}>
                <CheckBox
                  value={isCheckBox.berita}
                  onValueChange={newValue =>
                    setCheckBox({ ...isCheckBox, berita: newValue })
                  }
                />
                <Text style={styles.titleTextInputCheckbox}>Berita</Text>
              </View>
              <View style={styles.textInputCheckbox}>
                <CheckBox
                  value={isCheckBox.siaran}
                  onValueChange={newValue =>
                    setCheckBox({ ...isCheckBox, siaran: newValue })
                  }
                />
                <Text style={styles.titleTextInputCheckbox}>Siaran Pers</Text>
              </View>
              <View style={styles.textInputCheckbox}>
                <CheckBox
                  value={isCheckBox.pengumuman}
                  onValueChange={newValue =>
                    setCheckBox({ ...isCheckBox, pengumuman: newValue })
                  }
                />
                <Text style={styles.titleTextInputCheckbox}>Pengumuman</Text>
              </View>
            </View>
          </View>
        </View>

      </View>





      <View style={styles.seoContent}>
        <Text style={{
          ...styles.label, paddingBottom: 10, textTransform: 'uppercase',
          backgroundColor: '#e8e6e6',
          paddingHorizontal: 15,
          paddingVertical: 10,
          fontSize: 14,
          marginVertical: 15,
        }}
        >
          SEO Content
        </Text>
        <View>
          <Text style={{ ...styles.label, paddingBottom: 5 }}>
            Meta Description
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={3}
            style={styles.textInputArea}
          />
        </View>
        <View>
          <Text style={{ ...styles.label, paddingBottom: 5 }}>Meta Keyword</Text>
          <TextInput
            multiline={true}
            numberOfLines={3}
            style={styles.textInputArea}
          />
        </View>
        <View>
          <Text style={{ ...styles.label, paddingBottom: 5 }}>Meta Title</Text>
          <TextInput
            multiline={true}
            numberOfLines={3}
            style={styles.textInputArea}
          />
        </View>
      </View>
      <View style={styles.actionButton}>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: '#0089EC' }}
          onPress={() => handleSubmit()}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: '#FF5454' }}
          onPress={() =>
            navigation.navigate('ManagementAdminNewsAndBroadcast')
          }>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Batal</Text>
        </TouchableOpacity>
      </View>
    </BaseContainerManagementAdmin>
  );
};

const styles = StyleSheet.create(FormStyles);

export default CreateManagementAdminNewsAndBroadcast;
