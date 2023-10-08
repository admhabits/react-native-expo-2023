import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { primary, secondary } from "./Colors";

export const LinearBackground = ({ children, style }) => {
  return (
    <LinearGradient colors={[secondary, primary]} style={{ ...style }}>
      {children}
    </LinearGradient>
  );
};
