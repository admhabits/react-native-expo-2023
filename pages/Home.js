import { Text, View, StyleSheet } from "react-native";
import React from "react";
import LayoutScreen from "../components/Layout";
import { ScrollView } from "react-native-gesture-handler";
import SwiperComponent from "../components/Swiper";
import SwiperLib from "../components/Swiper/SwiperLib";

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
        <View style={{ height: 200, padding: 20 }}>
          <SwiperLib />
        </View>
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
