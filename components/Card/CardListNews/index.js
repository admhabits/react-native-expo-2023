/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {iconCalender} from 'configs/Images';
import moment from 'moment';
import { BaseUrl } from '../../../utils/Constants';

const CardListNews = props => {
  const {id, fileName, date, title, postExcerpt, type} = props;
  // console.log(` FILE IMAGE BERITA : ${BaseUrl}/storage/images/post/${id}/md-${fileName}`)
  const baseURLPost = `${BaseUrl}/storage/images/post/${id}/md-${fileName}`;
  return (
    <View>
      <TouchableOpacity onPress={()=> props.navigation.navigate('DetailPost', {id, fileName, date, title, postExcerpt, baseURLPost, type})}>
        <View style={styles.outer}>
          <View style={styles.left}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={iconCalender}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontStyle: 'italic',
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 10,
                }}>
                {moment(date).format('dddd YYYY-MM-DD')}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 10,
                fontFamily: 'Montserrat-Regular',
                marginTop: 5,
                marginRight: 10,
                textTransform: 'capitalize',
              }}>
              {title}
            </Text>
          </View>
          <View style={styles.right}>
            <Image
              source={{
                uri: `${BaseUrl}/storage/images/post/${id}/sm-${fileName}`,
              }}
              style={{
                width: '100%',
                maxWidth: 200,
                maxHeight: 200,
                height: '100%',
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#C4C4C4',
            height: 2,
            marginTop: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    height: 70,
    marginTop: 30,
  },
  left: {
    width: '50%',
  },
  right: {
    width: '50%',
    display: 'flex',
    backgroundColor: 'gray',
  },
  images: {
    height: '90%',
    width: '90%',
  },
});

export default CardListNews;
