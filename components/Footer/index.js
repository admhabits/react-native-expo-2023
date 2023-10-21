import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { logoutUser } from "~/stores/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "~/stores/saved/AsyncStorage";

export const ButtonIcon = ({ name, size, color, textSize, title, onPress }) => {
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
        <FontAwesome name={name} size={size} color={color} />
        <Text
          style={{
            fontSize: textSize,
            fontFamily: "Montserrat",
            color,
            marginTop: 5,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const FloatingButton = ({ style }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(logoutUser());
  };

  useEffect( () => {
    
    const getLocalUserData = async () => {
      try {
        // Perform asynchronous operations here, for example, fetching data from an API
        const response = await loadState();
        console.log(response);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };

    getLocalUserData();

    return () => {
      // Cleanup code
    };

  }, []);
  return (
    <LinearGradient
      colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
      style={style}
    >
      <TouchableOpacity onPress={() => LogoutHandler()}>
        <FontAwesome name="door-open" size={30} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default function Footer({ style, float, navigation }) {
  return (
    <LinearGradient
      colors={["#28A297", "rgba(40, 162, 151, 0.5)"]}
      style={{ ...styles.footer, ...style }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ButtonIcon
          name="tachometer-alt"
          size={20}
          textSize={12}
          title="Beranda"
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
        <ButtonIcon
          name="school"
          size={20}
          textSize={12}
          title="Profile"
          color="white"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ButtonIcon
          name="file-medical-alt"
          size={20}
          textSize={12}
          title="Si DOEL"
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
        <ButtonIcon
          name="id-card"
          size={20}
          textSize={12}
          title="Akun"
          color="white"
          onPress={() => navigation.navigate("Informasi")}
        />
      </View>

      <FloatingButton style={{ ...styles.floatButton, ...float }} />
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
