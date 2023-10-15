import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "~/components/Icons";
import { getDocumentAsync } from "expo-document-picker";

export default function FileUpload({ label, getData }) {
  const [document, setDocument] = useState({});
  async function pickDocument() {
    try {
      const result = await getDocumentAsync({
        type: "*/*", // or specify your desired file types like 'application/pdf'
      });

      if (!result.canceled) setDocument(result.assets[0]);
      if (result.canceled) Alert.alert("Upload file aborted!");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData(document);
  }, [document]);

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
      <TouchableNativeFeedback onPress={async () => await pickDocument()}>
        <View style={styles.input}>
          <FontAwesome name="upload" size={20} color={"#234"} />
          <Text style={styles.textInput}>
            {document?.name ? document.name : "Upload File"}
          </Text>
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
