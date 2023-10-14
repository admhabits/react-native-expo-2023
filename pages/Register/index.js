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
import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import { orangeColor } from "~/components/configs/Colors";
import { ButtonIcon } from "~/components/Button";
import Form from "~/components/Form";

// create a component
const Register = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LoginHandler = () => {
    if (username == "" || password == "") {
      Alert.alert("Masukan Username dan Password yang valid!");
    } else {
      console.log(username);
      dispatch(loginUser({ username }));
      if (rememberMe) dispatch(toggleRememberMe());
      saveState(auth);
    }
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
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("Home");
    }
  }, [isAuthenticated]);

  return (
    <SafeAreaView style={styles.container}>
      <ButtonIcon
        name="arrow-left"
        textSize={18}
        size={14}
        title="Kembali"
        color="white"
        onPress={() => navigation.navigate("Login")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 20, gap: 10 }}>
          <Text style={styles.headerPage}>Daftar Akun</Text>
          <Text style={{ fontFamily: "Inter", fontSize: 18, color: "white" }}>
            Silakan lengkapi semua kolom masukan untuk membuat akun Anda
          </Text>
        </View>
        <View>
          <Form onChangeText={(user) => setUsername(user)} label="Nama"></Form>
          <Form
            onChangeText={(user) => setUsername(user)}
            label="Username"
          ></Form>
          <Form
            onChangeText={(user) => setUsername(user)}
            label="Kategori"
          ></Form>

          <Form
            onChangeText={(user) => setUsername(user)}
            label="Foto KTP/NPWP (max 2MB)"
          ></Form>
          <Form
            onChangeText={(user) => setUsername(user)}
            label="Foto Akta Perusahaan/Surat Tugas (max 2MB)"
          ></Form>
          <Form
            onChangeText={(user) => setUsername(user)}
            label="Email"
          ></Form>
          <Form
            placeholder="*********"
            label="Kata Sandi *Min 8 Karakter"
            secureTextEntry={true}
            onChangeText={(pass) => setPassword(pass)}
          ></Form>
          <Form
            placeholder="*********"
            label="Ulangi Kata Sandi"
            secureTextEntry={true}
            onChangeText={(pass) => setPassword(pass)}
          ></Form>
          <TouchableOpacity onPress={() => LoginHandler()}>
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
