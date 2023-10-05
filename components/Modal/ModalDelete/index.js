import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {BaseUrl} from '../../../utils/Constants';
import {useSelector} from 'react-redux';

function ModalDelete(props) {
  const {login} = useSelector(state => state);
  const {title, confirm, cancle, path, isActive, onCancelPressed, output} =
    props;
  const [showAlert, setShowAlert] = useState(false);

  const Delete = async () => {
    try {
      console.log('path ', path);
      const deleteList = await fetch(BaseUrl + path, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + login?.data?.token,
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log('berhasil1', data);
          onCancelPressed();
          output('SUCCESS');
          return data;
        })
        .catch(function (error) {
          console.log('error', error);
          onCancelPressed();
          output('FAILED');
          throw error;
        });

      console.log('cek deleteList', deleteList);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <AwesomeAlert
        show={isActive}
        showProgress={false}
        message={title}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText={cancle}
        confirmText={confirm}
        confirmButtonColor="#FF5454"
        canclemButtonColor="#0089EC"
        onCancelPressed={onCancelPressed}
        onConfirmPressed={() => Delete()}
      />
    </View>
  );
}

export default ModalDelete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#AEDEF4',
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
});
