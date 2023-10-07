import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  const { height, width }    = Dimensions.get("window");
  const PaddingLayout        = 10;
  const HeightLayout         = 60;
  const CalculateHeight      = (PaddingLayout + HeightLayout) * 2;

  return (
    <View style={styles.container}>
      <View style={{ ...styles.header, padding: PaddingLayout, height: HeightLayout }}>
        <Text>Home Page</Text>
        <Text>Home Page</Text>
      </View>
      <View style={{ height: height - CalculateHeight, padding: PaddingLayout }}>
        <Text>Content Page</Text>
      </View>
      <View style={{ ...styles.footer, padding: PaddingLayout, height: HeightLayout}}>
        <Text>Footer Page</Text>
        <Text>Footer Page</Text>
        <View style={{ ...styles.floatButton, left: (width - 80 ) / 2 }}>
          <TouchableOpacity>
            <Text style={{ color: 'white' }}>Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 0,
  },
  header: {
    backgroundColor: "darkgreen",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
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
    backgroundColor: 'blue',
    padding: 10,
    height: 80,
    width: 80,
    bottom: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Home;
