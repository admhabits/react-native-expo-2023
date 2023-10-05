import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Buton = props => {
  const {children, type, onPress} = props;
  if (type === 'outline') {
    return (
      <TouchableOpacity style={styles.outerOutline} onPress={onPress}>
        <Text style={styles.titleOutline}>{children}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.outer} onPress={onPress}>
        <Text style={styles.title}>{children}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#28A297',
    height: 30,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 17,
  },
  outerOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#28A297',
    height: 30,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  titleOutline: {
    fontWeight: 'bold',
    color: '#28A297',
    fontSize: 17,
  },
});

export default Buton;
