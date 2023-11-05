//import liraries
import { textPrimary } from "~/components/configs/Colors";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ThreeColumnWidth } from "~/components/configs/Layout";

// create a component
const UnitKerja = () => {
  return (
    <View
      style={{
        height: 180,
        backgroundColor: "transparent",
        marginTop: 15,
        paddingHorizontal: 20,
      }}
    >
      <Text style={styles.textHeading}>Unit Kerja</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ paddingTop: 20, gap: 20, flexDirection: "row" }}>
          <View style={styles.cardHome}></View>
          <View style={styles.cardHome}></View>
          <View style={styles.cardHome}></View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  textHeading: {
    fontFamily: "Montserrat",
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
    color: textPrimary,
  },
  cardHome: {
    height: 120,
    width: ThreeColumnWidth,
    backgroundColor: "#F0F0F0",
    flex: 1,
    borderRadius: 8,
  },
});

//make this component available to the app
export default UnitKerja;
