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
import {BaseContainerManagementAdmin} from 'components';
import RNPickerSelect from 'react-native-picker-select';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import CheckBox from '@react-native-community/checkbox';
import { FormStyles } from 'shared';

const CreateManagementNeedVerification = ({navigation}) => {
  const [filePath, setFilePath] = useState({});
  const [isCheckBox, setCheckBox] = useState({
    berita: false,
    siaran: false,
    pengumuman: false,
  });

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      // console.log('Response = ', response);

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
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };
  return (
    <BaseContainerManagementAdmin
      title={'Verifikasi PPID'}
      namePathBack={'Manage PPID'}
      onPressBack={() => navigation.navigate('ManagementPPIDNeedVerification')}>
      <View style={styles.input}>
        <View style={styles.title}>
          <Text style={styles.label}>Judul</Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.textInput} />
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
              onValueChange={value => console.log(value)}
              items={[
                {label: 'PUBLISH', value: 'publish'},
                {label: 'DRAFT', value: 'draft'},
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
                <Text style={{fontSize: 8, color: '#fff'}}>Pilih File</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actionButton}>
        <TouchableOpacity style={{...styles.btn, backgroundColor: '#0089EC'}}>
          <Text style={{color: '#fff', fontWeight: '600'}}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: '#FF5454'}}
          onPress={() => navigation.navigate('ManagementPPIDNeedVerification')}>
          <Text style={{color: '#fff', fontWeight: '600'}}>Batal</Text>
        </TouchableOpacity>
      </View>
    </BaseContainerManagementAdmin>
  );
};

const styles = StyleSheet.create(FormStyles);

export default CreateManagementNeedVerification;
