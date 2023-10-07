import { Text, StyleSheet } from "react-native";
import React from "react";
import LayoutScreen from "../components/Layout";
import { ScrollView } from "react-native-gesture-handler";

const ContentPage = ({ data }) => {
  return (
    <Text style={{ padding: 10, marginBottom: 10, ...styles.title }}>
      ListItem {data + 1}
    </Text>
  );
};

const Home = ({ navigation }) => {
  const components = [];

  for (let i = 0; i < 100; i++) {
    components.push(<ContentPage key={i} data={i} />);
  }

  return (
    <>
      <LayoutScreen statusBar="#FFF" navigation={navigation}>
        <ScrollView style={{ padding: 10 }}>{components}</ScrollView>
      </LayoutScreen>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat",
  },
});

export default Home;
