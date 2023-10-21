import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { toscaColor } from "~/components/configs/Colors";
import { PaddingLayout } from "~/components/configs/Layout";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: toscaColor,
    padding: PaddingLayout + 10,
  },
});
