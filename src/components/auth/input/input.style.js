import { StyleSheet } from "react-native";
import theme from "styles/theme.styles";

export default StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.75,
    borderBottomColor: theme.colors.grey[20],
    marginBottom: theme.spacing(4),
  },
  gutterBottom: {
    marginBottom: theme.spacing(2),
  },
  labelInput: {
    flex: 1,
    padding: 0,
    fontFamily: "open-sans",
    paddingVertical: theme.spacing(0),
    fontSize: theme.font.size.medium,
  },
  icon: {
    padding: 5,
  },
});
