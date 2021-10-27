import { StyleSheet } from "react-native";
import theme from "styles/theme.styles";
import global from "styles/global.styles";

export default StyleSheet.create({
  container: {
    width: "100%",
    padding: theme.spacing(5),
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.spacing(3),
    borderTopRightRadius: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(5),
  },
  title: {
    ...global.title,
  },
  subtitle: {
    ...global.subtitle,
  },
});
