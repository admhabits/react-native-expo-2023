import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export const ButtonIcon = ({ name, size, color, textSize, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "column",
          width: 75,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name={name} size={size} color={color} />
        <Text
          style={{
            fontSize: textSize,
            fontFamily: "Montserrat",
            color,
            marginTop: 5,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const FloatingButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
      style={style}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Informasi")}>
        <FontAwesome name="layer-group" size={30} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default function Footer({ style, float, navigation}) {
  return (
    <LinearGradient
      colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
      style={{ ...styles.footer, ...style }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ButtonIcon
          name="tachometer-alt"
          size={20}
          textSize={12}
          title="Beranda"
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
        <ButtonIcon
          name="school"
          size={20}
          textSize={12}
          title="Profile"
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ButtonIcon
          name="file-medical-alt"
          size={20}
          textSize={12}
          title="Si DOEL"
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
        <ButtonIcon
          name="id-card"
          size={20}
          textSize={12}
          title="Akun"
          color="white"
          onPress={() => navigation.navigate('Informasi')}
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
