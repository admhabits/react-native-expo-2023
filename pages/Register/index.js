//import liraries
import { toscaColor } from "~/components/configs/Colors";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "~/stores/slices/AuthSlice";
import { toggleRememberMe } from "~/stores/slices/AuthSlice";
import { saveState } from "~/stores/saved/AsyncStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaddingLayout } from "~/components/configs/Layout";
import { orangeColor } from "~/components/configs/Colors";
import { ButtonIcon } from "~/components/Button";
import Form from "~/components/Form";
import DropDown from "~/components/Form/DropDown";
import FileUpload from "~/components/Form/FileUpload";

// create a component
const Register = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [registerObj, setRegisterObj] = useState({
    nama: "",
    username: "",
    kategori: "",
    ktpNpwp: "",
    aktaSurat: "",
    email: "",
    kataSandi: "",
    kataSandiConfirm: "",
  });

  const RegisterHandler = () => {
    Alert.alert(JSON.stringify(registerObj));
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert("User Confirmation", "Kamu yakin ingin keluar aplikasi ?", [
        { text: "Batal", onPress: () => false, style: "cancel" },
        { text: "Ya", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup the event listener on component unmount
  }, []);

  const navigation = useNavigation();

  const items = [
    { value: "1", label: "Option A" },
    { value: "2", label: "Option B" },
    { value: "3", label: "Option C" },
    { value: "4", label: "Option D" },
    { value: "5", label: "Option E" },
    { value: "6", label: "Option F" },
    { value: "7", label: "Option G" },
    { value: "8", label: "Option H" },
  ];

  const InputHandlerChange = (obj) => {
    setRegisterObj({ ...registerObj, ...obj });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingBottom: 20 }}>
        <ButtonIcon
          name="arrow-left"
          textSize={18}
          size={14}
          title="Kembali"
          color="white"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 20, gap: 10 }}>
          <Text style={styles.headerPage}>Daftar Akun</Text>
          <Text style={{ fontFamily: "Inter", fontSize: 18, color: "white" }}>
            Silakan lengkapi semua kolom masukan untuk membuat akun Anda
          </Text>
        </View>
        <View>
          <Form
            onChangeText={(value) => InputHandlerChange({ nama: value })}
            label="Nama Lengkap"
          />
          <Form
            onChangeText={(value) => InputHandlerChange({ username: value })}
            label="Username"
          />

          <View style={{ gap: 15, marginBottom: 15 }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "Inter",
              }}
            >
              Kategori
            </Text>
            <DropDown
              getCurrentValue={(value) =>
                InputHandlerChange({ kategori: value })
              }
              items={items}
            />
          </View>

          <FileUpload
            getData={(data) => InputHandlerChange({ ktpNpwp: data?.name })}
            label="Foto KTP/NPWP (max 2MB)"
          />
          <FileUpload
            getData={(data) => InputHandlerChange({ aktaSurat: data?.name })}
            label="Foto Akta Perusahaan/Surat Tugas (max 2MB)"
          />

          <Form
            onChangeText={(value) => InputHandlerChange({ email: value })}
            label="Email"
          />
          <Form
            placeholder="*********"
            label="Kata Sandi *Min 8 Karakter"
            secureTextEntry={true}
            onChangeText={(pass) => InputHandlerChange({ kataSandi: pass })}
          />
          <Form
            placeholder="*********"
            label="Ulangi Kata Sandi"
            secureTextEntry={true}
            onChangeText={(pass) => InputHandlerChange({ kataSandi: pass })}
          />
          <TouchableOpacity onPress={() => RegisterHandler()}>
            <Text style={styles.btnRegisterStyle}>Daftar Akun</Text>
          </TouchableOpacity>

          <View style={styles.container2}>
            <Text style={{ fontFamily: "Inter", fontSize: 16, color: "white" }}>
              Sudah Memiliki akun?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.fontSignUp}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: toscaColor,
    padding: PaddingLayout + 10,
  },
  container2: {
    marginVertical: 20,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  fontGeneral: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontFamily: "Montserrat",
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 14,
  },
  fontSignUp: {
    fontFamily: "Inter",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  btnRegisterStyle: {
    color: "white",
    padding: 15,
    marginTop: 10,
    fontFamily: "Montserrat",
    backgroundColor: orangeColor,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 10,
    textTransform: "uppercase",
  },
  headerPage: {
    fontFamily: "Inter",
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});

//make this component available to the app
export default Register;
