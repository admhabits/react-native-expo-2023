import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const ContentPage = ({ data }) => {
  return (
    <Text style={{ padding: 10, marginBottom: 10 }}> ListItem {data + 1}</Text>
  );
};

const Home = () => {
  const { height, width } = Dimensions.get("window");
  const PaddingLayout = 10;
  const HeightLayout = 60;
  const CalculateHeight = (PaddingLayout + HeightLayout) * 2;
  const components = [];

  for (let i = 0; i < 100; i++) {
    components.push(<ContentPage key={i} data={i} />);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LinearGradient
          colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
          style={{
            ...styles.header,
            padding: PaddingLayout,
            height: HeightLayout,
          }}
        >
          <Text>Home Page</Text>
          <Text>Home Page</Text>
        </LinearGradient>
        <View style={{ height: height - CalculateHeight, paddingBottom: 10 }}>
          <ScrollView style={{ padding: PaddingLayout }}>
            {components}
          </ScrollView>
        </View>
        <LinearGradient
          colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
          style={{
            ...styles.footer,
            padding: PaddingLayout,
            height: HeightLayout,
          }}
        >
          <Text>Footer Page</Text>
          <Text>Footer Page</Text>
          <LinearGradient
            colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
            style={{ ...styles.floatButton, left: (width - 80) / 2 }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white" }}>Sign In</Text>
            </TouchableOpacity>
          </LinearGradient>
        </LinearGradient>
        <StatusBar style="dark" backgroundColor="#ffffff" />
      </View>
    </SafeAreaView>
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

export default Home;
