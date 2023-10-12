import React, { useEffect } from "react";
import Home from "~/pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "~pages/Login";
import Informasi from "~/pages/informasi";
import Register from "~/pages/Register";

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
       <Stack.Screen
        name="Informasi"
        component={Informasi}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Pendaftaran"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
