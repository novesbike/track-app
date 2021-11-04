import { StyleSheet } from "react-native";
import theme from "./theme.styles";

export default StyleSheet.create({
  textLink: {
    color: theme.colors.primary,
    fontSize: theme.font.size.small,
  },
  title: {
    fontFamily: "PlutoBold",
    fontSize: theme.font.size.extra_large,
    color: theme.colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    color: theme.colors.grey[40],
    fontSize: theme.font.size.medium,
  },

  textGrey: {
    color: theme.colors.grey[30],
  },
  paragraph: {
    marginBottom: theme.spacing(2),
  },
  center: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  borderGrey: {
    borderTopColor: theme.colors.grey[20],
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    marginTop: 10,
    marginBottom: 10,
  },
  boxShadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 4,
  },

  divider: {
    backgroundColor: theme.colors.grey[20],
    minHeight: 1,
    flex: 1,
  },
  dividerLight: {
    backgroundColor: "#ffffff26",
    minHeight: 1,
    flex: 1,
  },
  dividerDark: {
    backgroundColor: "#00000026",
    minHeight: 1,
    flex: 1,
  },
  btn_primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.large,
  },
  btn_secondary: {
    backgroundColor: "transparent",
    borderRadius: theme.radius.large,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
});
