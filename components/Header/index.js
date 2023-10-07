import { StyleSheet, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Header({ style }) {
  return (
    <>
      <LinearGradient
        colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
        style={{  ...styles.header, ...style }}
      >
        <Text style={styles.title}>Home Page</Text>
        <Text style={styles.title}>Home Page</Text>
      </LinearGradient>
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

  title: {
    fontFamily: "Montserrat",
  },
});
