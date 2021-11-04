import { Dimensions } from "react-native";

const height = Math.round(Dimensions.get("window").height);

const font = {
  size: {
    small: 12,
    medium: 14,
    large: 16,
    large_plus: 20,
    extra_large: 24,
  },
  roboto: {
    thin: "roboto-thin",
    light: "roboto-light",
    italic: "roboto-italic",
    regular: "roboto-regular",
    medium: "roboto-medium",
    bold: "roboto-bold",
  },
  light: "PlutoLight",
  regular: "PlutoRegular",
  medium: "PlutoMedium",
  bold: "PlutoBold",
};

const radius = {
  small: 8,
  large: 20,
};

const colors = {
  primary: "#FF7300",
  primaryLight: "#FFD3AF",
  secondary: "#1f3528",
  light_color: "#EEDFC7",
  red: "#f05e5e",
  yellow: "#f9b137",
  blue: "#2f78c4",
  green: "#04cc7a",
  white: "#FFF",
  black: "#000",
  grey: {
    10: "#FAF9FA",
    20: "#EEEEEE",
    30: "#757575",
    40: "#616161",
    50: "#414141",
  },
};

export default {
  font,
  colors,
  radius,
  spacing: (value) => 5 * value + height / 140,
};
