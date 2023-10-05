/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {
  backgroundFooter,
  backgroundHeader,
  logoDirektorat,
} from 'configs/Images';
import {logoDJPL} from 'configs/Images';
import {iconArrowBack} from '../../configs/Images';

const BaseContainerLogin = props => {
  const {children, onPressBack} = props;

  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener = useRef(null);
  const keyboardHideListener = useRef(null);

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );
    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    };
  }, []);

  return (
    <>
      <Image source={backgroundHeader} style={styles.header} />
      <Image source={logoDJPL} style={styles.logoDJPL} />
      <Image source={logoDirektorat} style={styles.logoDirektorat} />
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 10,
        }}
        onPress={onPressBack}>
        <Image source={iconArrowBack} style={styles.iconArrowBack} />
        <Text style={styles.back}>Kembali</Text>
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={100}
        style={styles.children}>
        {children}
      </KeyboardAvoidingView>
      <Image
        source={backgroundFooter}
        style={{...styles.footer, display: isOpen ? 'none' : 'flex'}}
      />
      <Text
        style={{
          bottom: 15,
          right: 18,
          position: 'absolute',
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'Montserrat-Regular',
        }}>
        v1.2
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  iconArrowBack: {
    width: 7,
    height: 17,
    marginRight: 10,
  },
  back: {
    color: '#fff',
    fontSize: 15,
  },
  header: {
    position: 'absolute',
    top: -150,
  },
  logoDJPL: {
    position: 'absolute',
    top: 20,
    width: 180,
    height: 200,
    display: 'flex',
    alignSelf: 'center',
  },
  logoDirektorat: {
    width: 230,
    height: 30,
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    top: 230,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: `100%`,
  },
  children: {
    width: '100%',
    height: 400,
    top: 250,
    paddingHorizontal: 50,
  },
});

export default BaseContainerLogin;
