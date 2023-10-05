import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const FormInput = ({ label, type, dispatch, state, chooseFile }) => {
  const [isShowPassword, setShowPassword] = useState(true);
  const dispatchForm = (value) => {
    // console.log(`Form Pendaftaran ${label}`, value)
    dispatch({ type, payload: value });
  }
  return (
    <View style={styles.input}>
      <Text
        style={{
          flex: 2,
          height: 25,
          alignItems: 'flex-end',
          marginBottom: -6,
          fontSize: 12,
          // textTransform: 'capitalize',
        }}>
        {label}
      </Text>
      <View style={{ flex: 2.8, }}>
        {
          type !== 'password' ?

            <TextInput
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                height: 25,
                fontSize: 12,
                paddingBottom: 5,
                paddingLeft: 0,
                paddingTop: 5,
                marginTop: 12,
              }}
              onChangeText={dispatchForm}
              editable={type === 'dokumen' || type === 'surat' ? false : true}
            /> : null
        }

        {
          type === 'dokumen' || type === 'surat' ?
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                height: 20,
                position: 'absolute',
                left: 0,
                bottom: 5,
                backgroundColor: 'gray',
                paddingHorizontal: 8,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 7,
                marginBottom: 3,
                justifyContent: 'center',
              }}
              onPress={() => chooseFile('photo')}>
              <Text style={{ fontSize: 8, color: '#fff' }}>Unggah</Text>
            </TouchableOpacity> : null
        }

        {
          type === 'password' ?
            <TextInput
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                height: 25,
                fontSize: 12,
                paddingBottom: 5,
                paddingLeft: 0,
                paddingTop: 5,
                marginTop: 12,
              }}
              value={state.label}
              secureTextEntry={isShowPassword}
              onChangeText={e => dispatchForm(e)}
            />
            : null
        }
        {
          type === 'password' ?
            <TouchableOpacity
              onPress={() => setShowPassword(!isShowPassword)}
              style={{ marginTop: 10, position:'absolute', right: 0 }}>
              {isShowPassword ? (
                <Icon name="eye" size={18} color="#000" />
              ) : (
                <Icon name="eye-slash" size={18} color="#000" />
              )}
            </TouchableOpacity>
            : null
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
  },
  label: {
    fontSize: 12,
    justifySelf: 'flex-end',
  },
  underlineUnggah: {
    width: 150,
    height: 2,
    backgroundColor: '#000',
  },
  underlineIcon: {
    width: 150,
    height: 2,
    backgroundColor: '#000',
  },
  textInput: {
    height: 10,
    paddingLeft: -5,
    fontSize: 10,
    padding: 5,
  },
  button: {
    backgroundColor: 'red',
  },
});