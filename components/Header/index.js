/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { logoHubla, iconSearch } from 'configs/Images';
import IconFeather from 'react-native-vector-icons/Feather';

const Header = props => {
  const { type, onPressBack, namePathBack, isArrowBack, justifyContentTitle } =
    props;
  const [isSearch, setSearch] = useState(false);
  const SliderWidth = Dimensions.get('screen').width;

  if (type === 'search') {
    return (
      <LinearGradient
        colors={['#28A297', 'rgba(40, 162, 151, 0.5)']}
        style={styles.outer}>
        {isSearch === false ? (
          <View style={styles.title}>
            <Image source={logoHubla} style={styles.logo} />

            <View style={styles.text}>
              <Text style={styles.text1}>
                KEMENTRIAN PERHUBUNGAN REPUBLIK INDONESIA
              </Text>
              <Text style={styles.text2}>
                DIREKTORAT JENDRAL PERHUBUNGAN LAUT
              </Text>
            </View>
          </View>
        ) : null}

        <View style={{ ...styles.search, width: isSearch ? '100%' : 100 }}>
          <TouchableWithoutFeedback onPress={() => setSearch(true)}>
            <Image
              source={iconSearch}
              style={{ width: 15, height: 15, marginRight: 2 }}
            />
          </TouchableWithoutFeedback>
          <TextInput
            style={styles.inputSearch}
            placeholder="Pencarian"
            placeholderTextColor="#fff"
            onSubmitEditing={() => setSearch(false)}
          />
        </View>
      </LinearGradient>
    );
  } else if (type === 'back') {
    return (
      <View style={{ ...styles.outerBack, justifyContent: justifyContentTitle }}>
        {isArrowBack ? (
          <TouchableOpacity onPress={onPressBack}>
            <IconFeather name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
        ) : null}
        <Text style={{ fontSize: 18, marginLeft: 10, color: '#fff' }}>
          {namePathBack}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    width: '100%',
    height: 50,
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 30,
    height: 31,
    marginRight: 5,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 6,
    fontWeight: 'bold',
    color: '#fff',
  },
  text2: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#fff',
  },
  search: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  inputSearch: {
    fontSize: 15,
    color: '#fff',
    height: 50,
  },
  outerBack: {
    height: 50,
    width: '100%',
    backgroundColor: '#28A297',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default Header;

Header.defaultProps = {
  type: 'search',
  isArrowBack: true,
  justifyContentTitle: 'space-start',
};
