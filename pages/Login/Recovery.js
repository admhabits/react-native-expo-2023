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
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaddingLayout } from "~/components/configs/Layout";
import { orangeColor } from "~/components/configs/Colors";
import { ButtonIcon } from "~/components/Button";

// create a component
const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const forgotPasswordHandler = () => {
    if (username != "")
      Alert.alert(`Permintaan reset password telah terkirim ke ${username}`),
      navigation.navigate("Login");
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

  return (
    <SafeAreaView style={styles.container}>
      <ButtonIcon
        name="arrow-left"
        textSize={18}
        size={14}
        title="Kembali"
        color={"white"}
        onPress={() => navigation.navigate("Login")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 20, gap: 10 }}>
          <Text style={styles.headerPage}>Lupa Password</Text>
          <Text style={{ fontFamily: "Inter", fontSize: 18, color: "white" }}>
            Masukan email atau username anda untuk permintaan reset password
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
          <TouchableOpacity onPress={() => forgotPasswordHandler()}>
            <Text style={styles.btnRegisterStyle}>
              Kirim Link Reset Password
            </Text>
          </TouchableOpacity>
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
export default ForgotPassword;
