/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { HeaderProfile } from 'components';
import { strukturOrganisasi, foto, logoHubla } from 'configs/Images';
import { BaseUrl } from '../../utils/Constants';
import { useSelector } from 'react-redux';
import GetVisiMisi from './Apis/GetVisiMisi';
import TugasDanFungsi from './Apis/TugasDanFungsi';
import MaknaLogo from './Apis/MaknaLogo';
import HimneDanMars from './Apis/HimneDanMars';
import Sekretariat from './Apis/Sekretariat';
import LaluLintas from './Apis/LaluLintas';
import Kepelabuhan from './Apis/Kepelabuhan';
import Perkapalan from './Apis/Perkapalan';
import Kenavigasian from './Apis/Kenavigasian';
import Kesatuan from './Apis/Kesatuan';
import Pejabat from './Apis/Pejabat';

const ProfileHome = ({ navigation }) => {
  const { login } = useSelector(state => state);
  const [openLalu, setOpenLaluLintas] = useState(false);
  const [openPelabuhan, setOpenPelabuhan] = useState(false);
  const [openPerkapalan, setOpenPerkapalan] = useState(false);
  const [openNavigasi, setOpenNavigasi] = useState(false);
  const [openKesatuan, setOpenKesatuan] = useState(false)
  const [openStatus, setOpenStatus] = useState(false);
  const [openTugas, setOpenTugas] = useState(false);
  const [openStruktur, setOpenStruktur] = useState(false);
  const [openPejabat, setOpenPejabat] = useState(false);
  const [openUnit, setOpenUnit] = useState(false);
  const [openSekertariat, setOpenSekertariat] = useState(false);
  const [openMakna, setOpenMakna] = useState(false);
  const [openHimne, setOpenHimne] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <>
      <HeaderProfile onPressBack={() => navigation.navigate('Home')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            setOpenStatus(!openStatus);
          }}>
          <View style={styles.header}>
            <Text style={styles.text}>VISI dan MISI</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linestyle} />
            </View>
          </View>
        </TouchableOpacity>

        {openStatus === true ? (
          <View style={styles.subStatus}>
            <GetVisiMisi />
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            setOpenTugas(!openTugas);
          }}>
          <View style={styles.header}>
            <Text style={styles.text}>Tugas dan Fungsi</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linestyle} />
            </View>
          </View>
        </TouchableOpacity>

        {openTugas === true ? (
          <View style={styles.subStatus}>
            <TugasDanFungsi />
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            setOpenStruktur(!openStruktur);
          }}>
          <View style={styles.header}>
            <Text style={styles.text}>Struktur Organisasi</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linestyle} />
            </View>
          </View>
        </TouchableOpacity>

        {openStruktur === true ? (
          <View style={styles.subStatus}>
            <Image source={strukturOrganisasi} style={styles.struktur} />
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            setOpenPejabat(!openPejabat);
          }}>
          <View style={styles.header}>
            <Text style={styles.text}>Pejabat DJPL</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linestyle} />
            </View>
          </View>
        </TouchableOpacity>

        {openPejabat === true ? (
          <View>
           <Pejabat styles={styles}/>
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            setOpenUnit(!openUnit);
          }}>
          <View style={styles.header}>
            <Text style={styles.text}>Unit Kerja</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linestyle} />
            </View>
          </View>
        </TouchableOpacity>

        {openUnit === true ? (
          <View style={styles.subStatus}>
            <TouchableOpacity
              onPress={() => {
                setOpenSekertariat(!openSekertariat);
              }}>
              <Text style={styles.textUnit}>Sekretariat Direktorat Jendral</Text>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.linestyleUnit} />
              </View>
            </TouchableOpacity>
            {openSekertariat === true ? (
              <Sekretariat />
            ) : null}


            <TouchableOpacity
              onPress={() => {
                setOpenLaluLintas(!openLalu);
              }}>
              <Text style={styles.textUnit}>Direktorat Lalu Lintas Angkatan Laut</Text>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.linestyleUnit} />
              </View>
            </TouchableOpacity>
            {openLalu === true ? (
              <LaluLintas />
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setOpenPelabuhan(!openPelabuhan);
              }}>
              <Text style={styles.textUnit}>Direktorat Kepelabuhan</Text>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.linestyleUnit} />
              </View>
            </TouchableOpacity>
            {openPelabuhan === true ? (
              <Kepelabuhan />
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setOpenPerkapalan(!openPerkapalan);
              }}>
              <Text style={styles.textUnit}>Direktorat Perkapalan dan Kepelautan</Text>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.linestyleUnit} />
              </View>
            </TouchableOpacity>
            {openPerkapalan === true ? (
              <Perkapalan />
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setOpenNavigasi(!openNavigasi);
              }}>
              <Text style={styles.textUnit}>Direktorat Kenavigasian</Text>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.linestyleUnit} />
              </View>
            </TouchableOpacity>
            {openNavigasi === true ? (
              <Kenavigasian />
            ) : null}

            <TouchableOpacity
              onPress={() => {
                setOpenKesatuan(!openKesatuan);
              }}>
              <Text style={styles.textUnit}>Direktorat Kesatuan Penjagaan Laut dan Pantai</Text>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.linestyleUnit} />
              </View>
            </TouchableOpacity>
            {openKesatuan === true ? (
              <Kesatuan />
            ) : null}

            <Text style={styles.textUnit}>Unit Pelaksana Teknis</Text>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.linestyleUnit} />
            </View>
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            setOpenMakna(!openMakna);
          }}>
          <View style={styles.header}>
            <Text style={styles.text}>Makna Logo</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linestyle} />
            </View>
          </View>
        </TouchableOpacity>

        {openMakna === true ? (
          <View style={styles.subStatus}>
            <MaknaLogo />
          </View>
        ) : null}

        <TouchableOpacity
          onPress={() => {
            setOpenHimne(!openHimne);
          }}>
          <View style={styles.header}>
            <Text style={styles.text}>Himne dan Mars</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linestyle} />
            </View>
          </View>
        </TouchableOpacity>

        {openHimne === true ? (
          <View style={styles.subStatus}>
            <HimneDanMars />
          </View>
        ) : null}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#28A297',
  },
  linestyle: {
    height: 2,
    backgroundColor: '#28A297',
    paddingHorizontal: '40%',
    marginTop: '3%',
    marginBottom: '3%',
  },
  open: {
    backgroundColor: 'black',
  },
  subStatus: {
    paddingHorizontal: '10%',
  },
  textHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'black',
    marginBottom: '4%',
  },
  textStatus: {
    textAlign: 'justify',
    marginBottom: '3%',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '3%',
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 50,
  },
  textSubStatus: {
    textAlign: 'justify',
    marginTop: '-3%',
    marginLeft: '2%',
    marginBottom: '4%',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  textTugas: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    textAlign: 'justify',
    marginBottom: '6%',
  },
  textSubStatusFungsi: {
    textAlign: 'justify',
    marginTop: '-2%',
    marginLeft: '2%',
    marginBottom: '6%',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  struktur: {
    marginBottom: '5%',
  },
  subPejabat: {
    paddingHorizontal: '10%',
    display: 'flex',
    flexDirection: 'row',
  },
  linestylePejabat: {
    height: 1,
    backgroundColor: 'black',
    paddingHorizontal: '42%',
    marginTop: '4%',
    marginBottom: '3%',
  },
  linestyleUnder: {
    height: 2,
    backgroundColor: 'black',
    paddingHorizontal: '40%',
    marginTop: '3%',
    marginBottom: '3%',
  },
  textUnit: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#28A297',
  },
  linestyleUnit: {
    height: 2,
    backgroundColor: '#28A297',
    paddingHorizontal: '50%',
    marginTop: '3%',
    marginBottom: '3%',
  },
  textMakna: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: '6%',
  },
  textSubMakna: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Roboto',
    textAlign: 'justify',
    marginBottom: '6%',
  },
  textHimne: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    marginTop: '4%',
  },
});

export default ProfileHome;
