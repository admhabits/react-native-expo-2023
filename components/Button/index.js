import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import React from "react";

export const ButtonIcon = ({ name, size, color, textSize, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10
        }}
      >
        <FontAwesome name={name} size={size} color={color} />
        <Text
          style={{
            fontSize: textSize,
            fontFamily: "Montserrat",
            color
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
