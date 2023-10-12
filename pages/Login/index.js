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
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "~/stores/slices/AuthSlice";
import { toggleRememberMe } from "~/stores/slices/AuthSlice";
import { saveState } from "~/stores/saved/AsyncStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaddingLayout } from "~/components/configs/Layout";
import CheckBox from '@react-native-community/checkbox';
import Checkbox from "expo-checkbox";

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
      <View>
        <TextInput
          onChangeText={(user) => setUsername(user)}
          placeholder="Username"
          style={styles.input}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          onChangeText={(pass) => setPassword(pass)}
          placeholder="Password"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity onPress={() => LoginHandler()}>
          <Text
            style={{
              color: "white",
              padding: 15,
              marginTop: 10,
              fontFamily: "Montserrat",
              backgroundColor: "orange",
              fontSize: 18,
              textAlign: "center",
              borderRadius: 10,
            }}
          >
            Masuk
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" , gap: 10}}>
          <Checkbox
            disabled={false}
            style={{ marginVertical: 20, color: 'white' }}
            value={rememberMe}
            onValueChange={(newValue) => setRememberMe(newValue)}
          />
          <Text style={{  fontFamily: 'Montserrat', color: 'white' }}>Remember Me</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: toscaColor,
    padding: PaddingLayout + 30,
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
});

//make this component available to the app
export default Login;
