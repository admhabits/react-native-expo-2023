/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Header } from 'components';
import moment from 'moment';
import { DownloadFunc } from '../../../shared';
import { BaseUrl } from '../../../utils/Constants';
const DetailPPID = ({ navigation, route }) => {
  const { registrationNumber, question, answerDate, answerFile, createdAt, answer, microsite, id, phone, email, name  } = route.params;
  console.log( registrationNumber, question, answerDate, answerFile, createdAt, answer, microsite, id, phone, email, name)

  const data = [{
    list: {
      nomor: registrationNumber,
      nama:phone,
      email: email,
      telp: name,
      tanggal: (() => !createdAt ? ('-') : moment(createdAt).format('YYYY-MM-DD HH:mm'))(),
      permohonan: (() => !question ? ('-') : question)(),
      jawaban: (() => !answer ? ('-') : answer)(),
      lampiran: (() => !answerFile ? ('Tidak tersedia') : answerFile)(),
      microsite: (() => !microsite ? ('-') : microsite)(),
    }
  }

  ];
  const theme = {
    background: '#f5f2f2',
    blue: '#0089EC',
  }
  return (
    <>
      <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
        <Header
          onPressBack={() => navigation.navigate('ManagementPPIDNeedVerification')}
          type={'back'}
          namePathBack={'Manage PPID'}
          justifyContentTitle="flex-start"
        />
        <View style={{ marginHorizontal: 15 }}>
          <View style={styles.title}>
            <Text>DETAIL PPID</Text>
          </View>

          {
            data.map((val, key) => (
              <View key={key}>
                <View style={{ ...styles.table, backgroundColor: theme.background }}>
                  <Text style={{ flex: 2, fontSize: 12 }}>Nomor Registrasi</Text>
                  <Text style={{ textTransform: 'uppercase', flex: 2, fontSize: 12 }}>{val.list.nomor}</Text>
                </View>
                <View style={styles.table}>
                  <Text style={{ flex: 2, fontSize: 12 }}>Nama Penanya</Text>
                  <Text style={{ textTransform: 'capitalize', flex: 2, fontSize: 12 }}>{val.list.nama}</Text>
                </View>
                <View style={{ ...styles.table, backgroundColor: theme.background }}>
                  <Text style={{ flex: 2, fontSize: 12 }}>E-mail</Text>
                  <Text style={{ flex: 2, fontSize: 12 }}>{val.list.email}</Text>
                </View>
                <View style={{ ...styles.table }}>
                  <Text style={{ flex: 2, fontSize: 12 }}>Telephone</Text>
                  <Text style={{ flex: 2, fontSize: 12 }}>{val.list.telp}</Text>
                </View>
                <View style={{ ...styles.table, backgroundColor: theme.background }}>
                  <Text style={{ flex: 2, fontSize: 12 }}>Tanggal Pengajuan</Text>
                  <Text style={{ flex: 2, fontSize: 12 }}>{val.list.tanggal}</Text>
                </View>
                <View style={{ ...styles.table, alignItems: 'center' }}>
                  <Text style={{ flex: 2, fontSize: 12 }}>Permohonan Informasi</Text>
                  <Text style={{ flex: 2, fontSize: 12 }}>{val.list.permohonan}</Text>
                </View>
                <View style={{ ...styles.table, alignItems: 'center', backgroundColor: theme.background }}>
                  <Text style={{ flex: 2, fontSize: 12 }}>Jawaban</Text>
                  <Text style={{ flex: 2, fontSize: 12 }}>{val.list.jawaban}</Text>
                </View>
                <View style={{ ...styles.table }}>
                  <Text style={{ flex: 2, fontSize: 12 }}>Lampiran</Text>
                  <TouchableOpacity
                    onPress={()=> alert(val.list.lampiran)}
                    style={{ flex: 2 }}
                  >
                    <Text style={{ fontSize: 12, color: '#0089EC' }}>File</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ ...styles.table, alignItems: 'center', backgroundColor: theme.background }}>
                  <Text style={{ flex: 2, fontSize: 12 }}>Microsite</Text>
                  <Text style={{ flex: 2, fontSize: 12 }}>{val.list.microsite}</Text>
                </View>
              </View>
            ))
          }
        </View>


      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 25,
    fontWeight: '900',
  },
  table: {
    marginHorizontal: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default DetailPPID;

