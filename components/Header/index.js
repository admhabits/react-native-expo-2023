import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { logoHubla, iconSearch } from "../configs/Images";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { LinearBackground } from "../configs/LinearBackground";
import { primary, secondary } from "../configs/Colors";

export default function Header({ style }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <LinearBackground
        colors={[primary, secondary]}
        style={{ ...styles.header, ...style }}
      >
        <View style={styles.brand}>
          <Image source={logoHubla} style={styles.logo} />
          <Text style={styles.title}>KEMENTRIAN PERHUBUNGAN LAUT</Text>
        </View>
        <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
          <FontAwesome
            name={isDarkMode ? "sun" : "moon"}
            size={20}
            color={isDarkMode ? "#fff" : "#F0F0F0"}
          />
        </TouchableOpacity>
      </LinearBackground>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "darkgreen",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },

  brand: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  logo: {
    width: 30,
    height: 31,
    marginRight: 5,
  },

  title: {
    fontFamily: "Montserrat",
  },
});
