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

const LoginFooter = ({ setRememberMe, rememberMe }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Checkbox
          disabled={false}
          style={{ marginVertical: 20, color: "white", borderColor: "white" }}
          value={rememberMe}
          onValueChange={(newValue) => setRememberMe(newValue)}
        />
        <Text style={{ fontFamily: "Montserrat", color: "white" }}>
          Ingat Saya
        </Text>
      </View>
      <TouchableOpacity onPress={() => Alert.alert("Kamu lupa password ?")}>
        <Text style={{ fontFamily: "Montserrat", color: "white" }}>
          Lupa Kata Sandi ?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// create a component
const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 20, gap: 10 }}>
          <Text style={{ fontFamily: "Inter", fontSize: 30, color: "white" }}>
            Login
          </Text>
          <Text style={{ fontFamily: "Inter", fontSize: 16, color: "white" }}>
            Silakan masukkan alamat email dan kata sandi Anda untuk masuk ke
            akun Anda
          </Text>
        </View>
        <View>
          <View style={{ gap: 5 }}>
            <Text style={styles.fontGeneral}>Email</Text>
            <TextInput
              onChangeText={(user) => setUsername(user)}
              placeholder=""
              style={styles.input}
            ></TextInput>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={styles.fontGeneral}>Kata Sandi</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={(pass) => setPassword(pass)}
              placeholder="********"
              style={styles.input}
            ></TextInput>
          </View>
          <TouchableOpacity onPress={() => LoginHandler()}>
            <Text style={styles.btnSignInStyle}>Masuk</Text>
          </TouchableOpacity>
          <LoginFooter setRememberMe={setRememberMe} rememberMe={rememberMe} />
          <View style={styles.container2}>
            <Text style={{ fontFamily: "Inter", fontSize: 16, color: "white" }}>
              Belum punya akun?
            </Text>
            <Text style={style.fontSignUp}>Daftar Disini</Text>
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
     fontWeight: "bold"
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
  btnSignInStyle: {
    color: "white",
    padding: 15,
    marginTop: 10,
    fontFamily: "Montserrat",
    backgroundColor: orangeColor,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 10,
  },
});

//make this component available to the app
export default Login;
