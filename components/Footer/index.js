import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

export const FloatingButton = ({ style }) => {
  return (
    <LinearGradient
      colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
      style={style}
    >
      <TouchableOpacity>
        <FontAwesome name="qrcode" size={30} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default function Footer({ style, float }) {
  return (
    <LinearGradient
      colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
      style={{ ...styles.footer, ...style }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "column",
            width: 75,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="home" size={20} color="white" />
          <Text
            style={{ fontSize: 12, fontFamily: "Montserrat", color: "white" }}
          >
            Home
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            width: 75,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="school" size={20} color="white" />
          <Text
            style={{ fontSize: 12, fontFamily: "Montserrat", color: "white" }}
          >
            Pendidikan
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "column",
            width: 75,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="user-graduate" size={20} color="white" />
          <Text
            style={{ fontSize: 12, fontFamily: "Montserrat", color: "white" }}
          >
            Beasiswa
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            width: 75,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="chalkboard" size={20} color="white" />
          <Text
            style={{ fontSize: 12, fontFamily: "Montserrat", color: "white" }}
          >
            Informasi
          </Text>
        </View>
      </View>

      <FloatingButton style={{ ...styles.floatButton, ...float }} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat",
  },

  footer: {
    position: "relative",
    backgroundColor: "darkgreen",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  floatButton: {
    position: "absolute",
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 5,
    padding: 10,
    height: 80,
    width: 80,
    bottom: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
