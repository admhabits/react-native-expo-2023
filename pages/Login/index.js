//import liraries
import { toscaColor } from "~/components/configs/Colors";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, BackHandler, Alert } from "react-native";

// create a component
const Login = () => {
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
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
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
