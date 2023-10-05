/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { iconCalender } from 'configs/Images';
import moment from 'moment';
import PdfThumbnail from 'react-native-pdf-thumbnail';
import ImageView from 'react-native-image-viewing';
import { BaseUrl } from '../../../utils/Constants';
import DownloadFunc from '../../../shared/DownloadFunc';

const CardListGallery = props => {
  const { id, title, date, fileName, assetsPath, no, type } = props;
  console.log("CHECKING LIST GALLERY DATA NEWLETTER", JSON.stringify(props, null, 3))
  const [visible, setIsVisible] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

  const globPathSm = `${BaseUrl}/${assetsPath}/${id}/sm-${fileName}`;
  const globPathHd = `${BaseUrl}/${assetsPath}/${id}/hd-${fileName}`;

  // PDF URI

  useEffect(() => {
    if (type == 'pdf') {
      console.log("NEWSLETTER PDF FILE URI", pdfFile);
    }
    setPdfFile(`${BaseUrl}/${assetsPath}/${id}/${fileName}`);
  }, [])
  // console.log(`${BaseUrl}/${assetsPath}/${id}/sm-${fileName}`);
  // console.log(uri);
  const fileURI = type == 'pdf' ? (null) : (globPathSm);

  return (
    <>
      <TouchableOpacity onPress={() => type === 'pdf' ? DownloadFunc(pdfFile, title) : setIsVisible(true)}>
        <View style={{ ...styles.outer, backgroundColor: 'white' }}>
          <View style={styles.up}>
            <Image
              source={{
                uri: fileURI,
              }}
              style={{
                width: '100%',
                height: '100%',
                maxWidth: 200,
                maxHeight: 200,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={styles.down}>
            <View
              style={{
                backgroundColor: 'gray',
                width: 30,
                height: 45,
                display: 'flex',
                flexDirection: 'row',
                marginRight: 5,
              }}>
              <Text style={{ color: '#fff', paddingLeft: 5 }}>{no}</Text>
            </View>
            <View>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
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
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 8,
                  }}>
                  {moment(date).format('dddd YYYY-MM-DD')}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: 'Montserrat-Regular',
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <ImageView
        images={[
          {
            uri: globPathHd,
          },
        ]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </>
  );
};
CardListGallery.defaultProps = {
  type: 'image',
};

const styles = StyleSheet.create({
  outer: {
    marginTop: 20,
  },
  up: {
    width: 150,
    height: 100,
    backgroundColor: 'gray',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  down: {
    display: 'flex',
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    width: 120,
  },
  images: {
    height: '90%',
    width: '90%',
  },
});

export default CardListGallery;
