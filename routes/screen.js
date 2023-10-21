import React, { useEffect } from "react";
import Home from "~/pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "~pages/Login";
import Informasi from "~/pages/informasi";
import Register from "~/pages/Register";
import ForgotPassword from "~/pages/Login/Recovery";
import Profile from "~/pages/Profile";

const Stack = createStackNavigator();

const StackScreen = () => {
  const routes = [
    { name: "Home", component: Home, showHeader: false },
    { name: "Login", component: Login, showHeader: false },
    { name: "Pendaftaran", component: Register, showHeader: false },
    { name: "Profile", component: Profile, showHeader: false },
    { name: "Forgot", component: ForgotPassword, showHeader: false },
    { name: "Informasi", component: Informasi, showHeader: false },
  ];

  return (
    <Stack.Navigator>
      {routes.map((value, key) => (
        <Stack.Screen
          key={key}
          name={value.name}
          component={value.component}
          options={{ headerShown: value.showHeader }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackScreen;
