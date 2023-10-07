import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout({ children, statusBar = "blue" }) {
  const { height, width } = Dimensions.get("window");
  const PaddingLayout = 10;
  const HeightLayout = 60;
  const CalculateHeight = (PaddingLayout + HeightLayout) * 2;

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Header
            style={{
              padding: PaddingLayout,
              height: HeightLayout,
            }}
          />
          <View style={{ height: height - CalculateHeight, paddingBottom: 10 }}>
            {children}
          </View>
          <Footer
            style={{
              padding: PaddingLayout,
              height: HeightLayout,
            }}
            float={{ left: (width - 80) / 2 }}
          />
          <StatusBar style="dark" backgroundColor={statusBar} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 0,
  },

  title: {
    fontFamily: "Montserrat",
  },
});
