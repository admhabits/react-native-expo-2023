import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import FontAwesome from "~/components/Icons";

export default function FileUpload({ label }) {
  return (
    <View style={{ gap: 5 }}>
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
      <TouchableNativeFeedback onPress={() => Alert.alert("Upload File Base64")}>
        <View style={styles.input}>
          <FontAwesome name="upload" size={20} color={"#234"} />
          <Text style={styles.textInput}>Upload File</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontFamily: "Montserrat",
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 14,
  },
  textInput: {
    fontFamily: "Montserrat",
    color: "#234",
  },
});
