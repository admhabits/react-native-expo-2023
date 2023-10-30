//import liraries
import Layout from "~/components/Layout/General";
import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { toscaColor } from "~/components/configs/Colors";
import { textPrimary } from "~/components/configs/Colors";

// create a component
const Produk = ({ navigation }) => {
  return (
    <Layout
      statusBar={toscaColor}
      navigation={navigation}
      titlePage={"Peraturan"}
    >
      <ScrollView
        style={{ padding: 5, margin: 15 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headline}>
          Daftar Informasi Peraturan
        </Text>
      </ScrollView>
    </Layout>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  headline: {
    color: textPrimary,
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginBottom: 10,
  },
  normal: {
    color: textPrimary,
    fontSize: 16,
    fontFamily: "Roboto",
    textAlign: "justify",
    marginVertical: 2,
    lineHeight: 26,
  },
});

//make this component available to the app
export default Produk;
