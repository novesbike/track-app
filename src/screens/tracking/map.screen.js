import * as React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Map from "components/map/map";
import Controls from "components/map/map.controls";

const width = Math.round(Dimensions.get("window").width);

export default function MapScreen(props) {
  return (
    <View style={styles.container}>
      <Map />
      <View style={[styles.controls]}>
        <Controls {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  controls: {
    width: "100%",
    backgroundColor: "white",

    position: "absolute",
    bottom: 0,
    left: 0,

    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
});
