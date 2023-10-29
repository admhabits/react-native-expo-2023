import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { StatusBar } from "expo-status-bar";
import { textPrimary, secondary, backgroundPrimary } from "../configs/Colors";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "~/stores/saved/AsyncStorage";
import { updateRememberMe } from "~/stores/slices/AuthSlice";
import FontAwesome from "~/components/Icons";

export default function Layout({
  children,
  statusBar = textPrimary,
  navigation,
  titlePage,
}) {
  const { height, width } = Dimensions.get("window");
  const PaddingLayout = 10;
  const HeightLayout = 70;
  const CalculateHeight = HeightLayout * 2;

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            height: HeightLayout,
            backgroundColor: secondary,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 24,
              gap: 15,
            }}
          >
            <FontAwesome name="chevron-left" size={16} color={"white"} />
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}
            >
              {titlePage}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: height - CalculateHeight,
            paddingBottom: 10,
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
