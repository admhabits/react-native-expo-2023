import React, { useEffect } from "react";
import Home from "~/pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "~pages/Login";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const StackScreen = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigation = useNavigation();
  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Login");
    }
  }, [isAuthenticated]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
