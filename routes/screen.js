import React from "react";
import Home from "~/pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "~pages/Login";

const Stack = createStackNavigator();

const StackScreen = () => {
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
