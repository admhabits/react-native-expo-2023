import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { primary, secondary } from "./Colors";

export const LinearBackground = ({ children, style, colors = [secondary, primary]}) => {
  return (
    <LinearGradient colors={colors} style={{ ...style }}>
      {children}
    </LinearGradient>
  );
};
