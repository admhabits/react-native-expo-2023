//import liraries
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/Ionicons";

// create a component
const SearchHome = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        top: 90,
        marginHorizontal: 30,
        gap: 3,
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 15,
        borderColor: "#F0F0F0",
        borderWidth: 2,
      }}
    >
      <FontAwesome name="search" size={30} color={"#808080"} />
      <TextInput style={styles.inputCari} placeholder="Search"></TextInput>
    </View>
  );
};

//make this component available to the app
export default SearchHome;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat",
  },
  inputCari: {
    padding: 8,
    width: 300,
    fontFamily: "Montserrat",
    position: "relative",
    fontSize: 17,
    zIndex: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
});
