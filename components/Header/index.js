import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { logoHubla, iconSearch } from "../configs/Images";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { LinearBackground } from "../configs/LinearBackground";
import { primary, secondary, textPrimary, toscaColor } from "../configs/Colors";
import { useSelector } from "react-redux";

export default function Header({ style }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLocal, setIsLocal] = useState('id')
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <LinearBackground
        colors={[toscaColor, secondary]}
        style={{ ...styles.header, ...style }}
      >
        <View style={styles.brand}>
          <Image source={logoHubla} style={styles.logo} />
          <Text style={styles.title}>KEMENTRIAN PERHUBUNGAN LAUT</Text>
        </View>
        <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
          {/* <FontAwesome
            name={isDarkMode ? "sun" : "moon"}
            size={20}
            color={isDarkMode ? "#fff" : "#F0F0F0"}
          /> */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
            <TouchableOpacity onPress={() => setIsLocal('id')}>
              <Text style={{ ...styles.localizationText, color: isLocal == 'id' ? 'white' : textPrimary}}>ID</Text>
            </TouchableOpacity>
            <Text style={styles.localizationText}>/{count}</Text>
            <TouchableOpacity onPress={() => setIsLocal('en')}>
              <Text style={{ ...styles.localizationText, color: isLocal == 'en' ? 'white' : textPrimary}}>EN</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 16,
    color: textPrimary
  },
  localizationText: {
    fontFamily: "Montserrat",
    fontSize: 18,
    color: textPrimary,
  }
});
