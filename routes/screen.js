import React from "react";
import Home from "../pages/Home";
import { createStackNavigator } from "@react-navigation/stack";

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
        name="Home2"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
