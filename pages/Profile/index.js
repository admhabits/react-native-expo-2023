//import liraries
import { toscaColor } from "~/components/configs/Colors";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Layout from "~/components/Layout/General";
import { berita1 } from "~/components/configs/Images";

export const TextHeader = ({ jabatan, nama }) => {
  return (
    <>
      <Text
        style={{
          color: "white",
          fontFamily: "Roboto",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {jabatan}
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "Roboto",
          fontSize: 18,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        {nama}
      </Text>
    </>
  );
};

export const TextDetail = ({ field, value }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 5, gap: 10 }}>
      <Text
        style={{
          color: "white",
          fontFamily: "Roboto",
          fontSize: 16,
          textAlign: "left",
          width: 120,
        }}
      >
        {field}
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "Roboto",
          fontSize: 16,
          textAlign: "left",
        }}
      >
        :
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "Roboto",
          fontSize: 16,
          textAlign: "left",
        }}
      >
        {value}
      </Text>
    </View>
  );
};

const ProfilePPID = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: toscaColor,
        height: 360,
        marginHorizontal: 24,
        marginTop: 0,
        marginBottom: 30,
        borderRadius: 10,
        alignItems: "center",
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "darkblue",
          height: 200,
          width: 160,
          marginBottom: 20,
        }}
      ></View>
      <View>{children}</View>
    </View>
  );
};

// create a component
const Profile = ({ navigation }) => {
  return (
    <Layout
      statusBar={toscaColor}
      navigation={navigation}
      titlePage={"Profil PPID"}
    >
      <ScrollView
        style={{ padding: 10, marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ProfilePPID>
          <TextHeader
            jabatan={"Plt. Direktur Jendral Perhubungan Laut"}
            nama={"Dr. Capt. ANTONI ARIF PRIADI, M.Sc"}
          />
          <TextDetail
            field={"Golongan/Pangkat"}
            value={"Pembina Utama Muda (IV/C)"}
          />
          <TextDetail field={"NIP"} value={"1972937 129392 1982"} />
        </ProfilePPID>
        <ProfilePPID>
          <TextHeader
            jabatan={"Plt. Direktur Jendral Perhubungan Laut"}
            nama={"Dr. Capt. ANTONI ARIF PRIADI, M.Sc"}
          />
          <TextDetail
            field={"Golongan/Pangkat"}
            value={"Pembina Utama Muda (IV/C)"}
          />
          <TextDetail field={"NIP"} value={"1972937 129392 1982"} />
        </ProfilePPID>
      </ScrollView>
    </Layout>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Profile;
