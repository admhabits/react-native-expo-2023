import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { logoutUser } from "~/stores/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "~/stores/saved/AsyncStorage";
import { toscaColor } from "~/components/configs/Colors";

export const ButtonIcon = ({ name, size, color, textSize, title, onPress }) => {
  const disableOpacity = 0.7;
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
        <FontAwesome name={name} size={size} opacity={disableOpacity} color={color} />
        <Text
          style={{
            fontSize: textSize,
            fontFamily: "Montserrat",
            color,
            marginTop: 2,
            opacity: disableOpacity
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Footer({ style, float, navigation }) {
  const sizeFooterIcon = 30;
  const iconFooterColor = toscaColor;
  return (
    <LinearGradient
      colors={["white", "white"]}
      style={{ ...styles.footer, ...style }}
    >
      <ButtonIcon
        name="home"
        size={sizeFooterIcon}
        textSize={12}
        title="Beranda"
        color={iconFooterColor}
        onPress={() => navigation.navigate("Home")}
      />
      <ButtonIcon
        name="article"
        size={sizeFooterIcon}
        textSize={12}
        title="Si Doel"
        color={iconFooterColor}
        onPress={() => navigation.navigate("Sidoel")}
      />
      <ButtonIcon
        name="chat"
        size={sizeFooterIcon}
        textSize={12}
        title="Live Chat"
        color={iconFooterColor}
        onPress={() => navigation.navigate("Profile")}
      />
      <ButtonIcon
        name="switch-account"
        size={sizeFooterIcon}
        textSize={12}
        title="Akun"
        color={iconFooterColor}
        onPress={() => navigation.navigate("Profile")}
      />
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
