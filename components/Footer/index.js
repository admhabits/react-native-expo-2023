import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

export const ButtonIcon = ({ name, size, color, textSize, title }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        width: 75,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesome name={name} size={size} color={color} />
      <Text style={{ fontSize: textSize, fontFamily: "Montserrat", color, marginTop: 5 }}>
        {title}
      </Text>
    </View>
  );
};

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
        <ButtonIcon
          name="home"
          size={20}
          textSize={12}
          title="home"
          color="white"
        />
        <ButtonIcon
          name="school"
          size={20}
          textSize={12}
          title="Pendidikan"
          color="white"
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ButtonIcon
          name="user-graduate"
          size={20}
          textSize={12}
          title="Beasiswa"
          color="white"
        />
        <ButtonIcon
          name="chalkboard"
          size={20}
          textSize={12}
          title="Informasi"
          color="white"
        />
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
