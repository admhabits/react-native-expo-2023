import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RoutePath } from "~/components/configs/Routes";

const Stack = createStackNavigator();

const StackScreen = () => {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: forFade,
      }}
    >
      {RoutePath.map((value, key) => (
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
