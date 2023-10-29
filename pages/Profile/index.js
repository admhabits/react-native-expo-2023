//import liraries
import { toscaColor } from "~/components/configs/Colors";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Layout from "~/components/Layout/General";

// create a component
const Profile = ({ navigation }) => {
  return (
    <Layout
      statusBar={toscaColor}
      navigation={navigation}
      titlePage={"Profil PPID"}
    >
      <ScrollView></ScrollView>
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
});

//make this component available to the app
export default Profile;
