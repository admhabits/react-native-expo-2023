/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {iconCalender} from 'configs/Images';
import moment from 'moment';
const CardPengumuman = props => {
  const {id, title, images, date} = props;
  return (
    <>
      <TouchableOpacity>
        <View style={styles.outer}>
          <View style={styles.up}>
            <Image
              source={{
                uri: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
              }}
              style={{
                width: '100%',
                height: '100%',
                maxWidth: 200,
                maxHeight: 200,
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
              paddingLeft: 10,
            }}>
            <Image
              source={iconCalender}
              style={{
                width: 10,
                height: 10,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                fontStyle: 'italic',
                fontFamily: 'Roboto',
                fontSize: 6,
              }}>
              {moment(date).format('dddd YYYY-MM-DD')}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 7,
              fontFamily: 'Roboto',
              marginTop: 5,
              paddingLeft: 10,
              width: 100,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  outer: {
    marginTop: 20,
  },
  up: {
    width: 100,
    height: 140,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  down: {
    display: 'flex',
    marginTop: 10,
    flexDirection: 'row',
    // marginHorizontal: 20,
    width: 120,
  },
  images: {
    height: '90%',
    width: '90%',
  },
});

export default CardPengumuman;
