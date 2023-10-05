import React from 'react';
import {Text, View, Image, StyleSheet, Switch} from 'react-native';

const ProfileButton = props => {
  const {children, image, arrow} = props;
  return (
    <>
      <View style={styles.button}>
        <View style={styles.subbutton}>
          <Image source={image} style={styles.images} />
          <Text style={styles.text}>{children}</Text>
        </View>
        {arrow === undefined ? (
          <Switch style={styles.switch} />
        ) : (
          <Image source={arrow} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DADADA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    height: 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 10,
  },
  subbutton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  switch: {
    marginRight: '-4%',
  },
  images: {
    width: 13,
    height: 13,
  },
});

export default ProfileButton;
