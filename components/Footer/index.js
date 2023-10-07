import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const FloatingButton = ({ style }) => {
  return (
    <LinearGradient
      colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
      style={style}
    >
      <TouchableOpacity>
        <Text style={{ color: "white", fontFamily: 'Montserrat', fontSize: 16}}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default function Footer({ style, float}) {
  return (
    <LinearGradient
      colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
      style={{ ...styles.footer, ...style }}
    >
      <Text>Footer Page</Text>
      <Text>Footer Page</Text>
      <FloatingButton style={{  ...styles.floatButton, ...float }} />
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
