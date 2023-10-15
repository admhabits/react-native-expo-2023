import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Form({
  onChangeText,
  placeholder,
  label,
  secureTextEntry = false,
  defaultValue,
}) {
  return (
    <View style={{ gap: 5, marginBottom: 5 }}>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: 600,
          fontFamily: "Inter",
        }}
      >
        {label}
      </Text>
      <TextInput
        defaultValue={defaultValue}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontFamily: "Montserrat",
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 14,
  },
});
