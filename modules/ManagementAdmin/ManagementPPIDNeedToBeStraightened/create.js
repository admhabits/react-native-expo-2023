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

import { launchImageLibrary } from 'react-native-image-picker';
// import CheckBox from '@react-native-community/checkbox';
import RNFS from 'react-native-fs';
import { FormStyles } from 'shared';
import axios from 'axios';
import { BaseUrl } from '../../../utils/Constants';

const CreateManagementNeedToBeStraightened = ({ navigation, route }) => {
  const [filePath, setFilePath] = useState({});
  const { id } = route.params;
  console.log(route.params.id)
  const { login } = useSelector(state => state);
  const [microSite, setMicrosite] = useState([]);
  const [base, setBase] = useState('');
  const [fileName, setFileName] = useState('');
  const [answer, setAnswer] = useState('');
  const [microSiteId, setMicrositeId] = useState(microSite[0]?.id);

  const token = login.data.token;
  useEffect(() => {
    getDataMicro();
  }, [])

  const dataBody = {
    id,
    micrositeId: microSiteId,
    answer: answer,
    base64File: base
  };

  const answerPPID = async () => {

    await axios.post(`${BaseUrl}/api/list-ppid-need-action/update/answer`, dataBody, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data)

      })
      .catch(error => {
        console.log(error)
      })
  }

  const forwardPPID = async (id) => {

    await axios.post(`${BaseUrl}/api/list-ppid-need-action/update`, {
      id,
      micrositeId: microSiteId
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data)

      })
      .catch(error => {
        console.log(error)
      })
  }

  const verifyPPID = async (id) => {

    await axios.post(`${BaseUrl}/api/list-ppid-need-verify/verify?id=${route.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data)

      })
      .catch(error => {
        console.log(error)
      })
  }


  const getDataMicro = async () => {
    await axios.get(`${BaseUrl}/api/microsites`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const { data } = response.data;
        console.log(data.micrositesResponses);
        const micro = [];
        data.micrositesResponses.map((val, key) => {
          micro.push({
            label: val.name,
            value: val.id
          })
        });
        if (micro.length !== 0) {
          setMicrosite(micro)
        }

      })
      .catch(error => {
        console.log(error)
      })
  }



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
      title={'PPID Perlu Diteruskan'}
      namePathBack={'Manage PPID'}
      onPressBack={() =>
        navigation.navigate('ManagementPPIDNeedToBeStraightened')
      }>
      <View style={{ marginHorizontal: 15 }}>

        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Jawaban</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              multiline={true}
              numberOfLines={2}
              style={styles.textInputArea}
              value={answer}
              onChangeText={answer => setAnswer(answer)}
            />
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.title}>
            <Text style={styles.label}>Upload Lampiran</Text>
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
            <Text style={styles.label}>Microsite</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.textInputSelect}>
              <RNPickerSelect
                onValueChange={value => setMicrositeId(parseInt(value))}
                value={microSiteId}
                items={microSite}
              />
            </View>
          </View>
        </View>


        <View style={styles.actionButton}>
          <TouchableOpacity
            onPress={verifyPPID}
            style={{ ...styles.button, backgroundColor: '#00A040' }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Verifikasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#0089EC' }}
            onPress={answerPPID}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Jawab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={forwardPPID}
            style={{ ...styles.button, backgroundColor: '#FF5454' }}
            onPress={() => navigation.navigate('ManagementPPIDNeedToBeStraightened')}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Teruskan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#FF5454' }}
            onPress={() => navigation.navigate('ManagementPPIDNeedToBeStraightened')}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseContainerManagementAdmin>
  );
};

const styles = StyleSheet.create({
  ...FormStyles,
  button: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginLeft: 8,
    borderRadius: 6,
  }
});

export default CreateManagementNeedToBeStraightened;
