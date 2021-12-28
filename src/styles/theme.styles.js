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
  small: 10,
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
    25: "#A9A9A9",
    30: "#757575",
    40: "#616161",
    50: "#414141",
  },
};

const shadow = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.34,
  shadowRadius: 3,
  elevation: 4,
};

export default {
  font,
  colors,
  radius,
  shadow,
  spacing: (value) => 5 * value + height / 140,
};
