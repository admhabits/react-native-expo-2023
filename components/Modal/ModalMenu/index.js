/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  iconMenuBerita,
  iconMenuDocument,
  iconMenuGaleriFoto,
  iconMenuGaleriVidio,
  iconMenuHubungi,
  iconMenuInformasiPublik,
  iconMenuMaklumat,
  iconMenuPengumuman,
  iconMenuPeraturan,
  iconMenuPerjanjian,
  iconMenuPPID,
  iconMenuProsedure,
  iconMenuSiaran,
} from 'configs/Images';
import React, { createRef, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const ModalMenu = (props, { navigation }) => {
  const { isVisible, setVisible, onPress, direct } = props;
  const actionSheetRef = createRef();

  useEffect(() => {
    if (!isVisible) {
      actionSheetRef.current?.hide();
    } else {
      actionSheetRef.current?.show();
    }
  }, [isVisible, setVisible]);

  const dataPelayanan = [
    {
      icon: iconMenuHubungi,
      label: 'Hubungi Kami',
      widthIcon: 23,
      heightIcon: 23,
      path: 'HubungiKami',
    },
    {
      icon: iconMenuProsedure,
      label: 'Informasi Prosedur Pelayanan',
      widthIcon: 23,
      heightIcon: 25,
      path: 'InformasiProsedure',
    },
  ];

  const dataProduk = [
    {
      icon: iconMenuPeraturan,
      label: 'Draft Peraturan',
      widthIcon: 23,
      heightIcon: 23,
      path: 'DraftPeraturan',
    },
    {
      icon: iconMenuPeraturan,
      label: 'Peraturan',
      widthIcon: 23,
      heightIcon: 23,
      path: 'Peraturan',
    },
    {
      icon: iconMenuPerjanjian,
      label: 'Perjanjian',
      widthIcon: 23,
      heightIcon: 23,
      path: 'Perjanjian',
    },
    {
      icon: iconMenuDocument,
      label: 'Dokumen',
      widthIcon: 17,
      heightIcon: 20,
      path: 'Dokumen',
    },
  ];

  const dataPublikasi = [
    {
      icon: iconMenuBerita,
      label: 'Berita',
      widthIcon: 23,
      heightIcon: 23,
      path: 'Berita',
    },
    {
      icon: iconMenuSiaran,
      label: 'Siaran Pers',
      widthIcon: 23,
      heightIcon: 23,
      path: 'SiaranPers',
    },
    {
      icon: iconMenuGaleriFoto,
      label: 'Galeri Foto',
      widthIcon: 23,
      heightIcon: 23,
      path: 'GaleriFoto',
    },
    {
      icon: iconMenuGaleriVidio,
      label: 'Galeri Video',
      widthIcon: 23,
      heightIcon: 23,
      path: 'GaleriVidio',
    },
    {
      icon: iconMenuPengumuman,
      label: 'Pengumuman',
      widthIcon: 23,
      heightIcon: 23,
      path: 'Pengumuman',
    },
    {
      icon: iconMenuHubungi,
      label: 'Newsletter',
      widthIcon: 23,
      heightIcon: 23,
      path: 'Newsletter',
    },
    {
      icon: iconMenuMaklumat,
      label: 'Maklumat',
      widthIcon: 23,
      heightIcon: 23,
      path: 'Maklumat',
    },
  ];

  const dataPPID = [
    {
      icon: iconMenuPPID,
      label: 'Profil PPID',
      widthIcon: 20,
      heightIcon: 23,
      path: 'ProfilePPID',
    },
    {
      icon: iconMenuInformasiPublik,
      label: 'Informasi Publik',
      widthIcon: 23,
      heightIcon: 23,
      path: 'InformasiPublik',
    },
  ];

  const dataMenu = (list, title) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <View style={styles.dataMenuTitle}>
          <Text style={styles.dataMenuTitleText}>{title}</Text>
        </View>

        <View style={styles.dataMenuMenu}>
          {list.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.dataMenuMenuBtn}
              onPress={() => {
                setVisible(!isVisible);
                direct(item.path);
              }}>
              <Image
                source={item.icon}
                style={{ width: item.widthIcon, height: item.heightIcon }}
              />
              <Text style={{ fontSize: 9, textAlign: 'center' }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  let actionSheet;

  return (
    <>
      <ActionSheet
        closeOnPressBack={true}
        ref={actionSheetRef}
      >
        <View style={styles.boxModal}>
          <View style={styles.boxInnerModal}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '35%',
                  height: 3,
                  backgroundColor: '#C4C4C4',
                  borderRadius: 10,
                  // marginBottom: 20,
                }}
              />
              <ScrollView
                style={{
                  width: '100%',
                  marginBottom: 50,
                }}>
                {dataMenu(dataPelayanan, 'Pelayanan')}
                {dataMenu(dataProduk, 'Produk')}
                {dataMenu(dataPublikasi, 'Publikasi')}
                {dataMenu(dataPPID, 'PPID')}
              </ScrollView>
            </View>
          </View>
        </View>
      </ActionSheet>
    </>
  );
};

const styles = StyleSheet.create({
  outer: {
    justifyContent: 'flex-end',
    margin: 0,
    zIndex: -1,
  },
  boxModal: {
    backgroundColor: 'white',
    height: 450,
    paddingHorizontal: 10,
  },
  boxInnerModal: {
    borderWidth: 2,
    borderRadius: 10,
    height: 550,
    marginTop: '-10%',
    backgroundColor: '#fff',
    borderColor: '#C4C4C4',
  },
  dataMenuTitle: {
    height: 29,
    marginVertical: 7,
  },
  dataMenuMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '110%',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginLeft: '-5%',
    borderColor: '#C4C4C4',
  },
  dataMenuMenuBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 89,

    marginVertical: 8,
  },
  dataMenuTitleText: {
    fontSize: 18,
  },

  headerBottom: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineTop: {
    width: 40,
    height: 6,
    backgroundColor: 'gray',
  },
  lineBottom: {
    width: 40,
    height: 6,
    backgroundColor: 'white',
  },
  curtainContainer: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default ModalMenu;
