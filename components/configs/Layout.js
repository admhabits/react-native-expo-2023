import { Dimensions } from "react-native";

const PaddingLayout = 20;
const ThreeColumnWidth = Dimensions.get("window").width / 2.5 - PaddingLayout;
const FourColumnWidth = Dimensions.get("window").width / 3.9 - PaddingLayout;

export { PaddingLayout, ThreeColumnWidth, FourColumnWidth };