import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#293B2F",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginbox: {
    padding: 30,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    marginVertical: 5,
    color: "#FF7300",
    fontWeight: "bold",
  },
  subcontainer: {
    paddingVertical: 30,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.75,
    marginBottom: 30,
  },
  labelInput: {
    flex: 1,
    padding: 0,
    paddingVertical: 5,
    fontSize: 16,
  },
  links: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  submit: {
    backgroundColor: "#FF7300",
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 30,
  },
});
