import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { StatusBar } from "expo-status-bar";
import { backgroundPrimary, textPrimary } from "../configs/Colors";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "~/stores/saved/AsyncStorage";
import { updateRememberMe } from "~/stores/slices/AuthSlice";

export default function Layout({
  children,
  statusBar = textPrimary,
  navigation,
}) {
  const { height, width } = Dimensions.get("window");
  const PaddingLayout = 10;
  const HeightLayout = 75;
  const CalculateHeight = HeightLayout * 2;

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const auth = useSelector((state) => state.auth);

  // console.log(auth);

  // useEffect(() => {
  //   async function fetchLocalStorage() {
  //     const initialState = await loadState();
  //     console.log("==== isRememberMe ? :", initialState.rememberMe, "=====");
  //     if (initialState.rememberMe) {
  //       navigation.navigate("Home");
  //     }
  //   }
  //   fetchLocalStorage();
  // }, []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigation.navigate("Home");
  //   } else {
  //     navigation.navigate("Login");
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      <View style={styles.container}>
        <Header
          style={{
            padding: PaddingLayout,
            height: HeightLayout,
          }}
        />
        <View
          style={{
            height: height - CalculateHeight,
            paddingBottom: 0,
            backgroundColor: backgroundPrimary,
          }}
        >
          {children}
        </View>
        <Footer
          style={{
            padding: PaddingLayout,
            height: HeightLayout,
            position: "absolute",
            bottom: 0,
            width: width,
          }}
          navigation={navigation}
        />
        <StatusBar style="light" backgroundColor={statusBar} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    marginTop: 20,
  },

  title: {
    fontFamily: "Montserrat",
  },
});
