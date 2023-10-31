//import liraries
import { BackgroundImage } from "@rneui/base";
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

// create a component
const FootSection = () => {
  return (
    <>
      <View style={styles.section}>
        <Image
          source={require("~/assets/footer/background-footer.png")}
          style={{
            width: "100%",
            height: 300,
            position: "absolute",
            bottom: 0,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={{ backgroundColor: "#15224E", height: 100, padding: 20 }}>
        <Text
          style={{
            color: "white",
            fontFamily: "Montserrat",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          Copyright © 2023 Direktorat Jenderal Perhubungan Laut
        </Text>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  section: {
    position: "relative",
    height: 300,
    marginBottom: -100,
    backgroundColor: "transparent",
  },
});

//make this component available to the app
export default FootSection;
