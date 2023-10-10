//import liraries
import { toscaColor } from "~/components/configs/Colors";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "~/stores/slices/AuthSlice";
import { toggleRememberMe } from "~/stores/slices/AuthSlice";
import { saveState } from "~/stores/saved/AsyncStorage";

// create a component
const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const LoginHandler = () => {
    dispatch(
      loginUser({
        username: "@alamhafidz",
      })
    );
    if (true) { //Ketika checked RememberMe
      dispatch(toggleRememberMe());
    }
    saveState(auth);
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
    <View style={styles.container}>
      <Text>Login Page</Text>
      <TouchableOpacity onPress={() => LoginHandler()}>
        <Text
          style={{
            color: "white",
            padding: 10,
            margin: 10,
            backgroundColor: "orange",
          }}
        >
          Login App
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: toscaColor,
  },
});

//make this component available to the app
export default Login;
