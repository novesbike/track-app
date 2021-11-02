import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "styles/theme.styles";

import Welcome from "components/profile";
import CardStats from "components/stats";

function profileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle="light-content" />
      <View style={styles.bg}></View>
      <SafeAreaView style={styles.content}>
        <Welcome />
        <CardStats totalTime="10:24:60" totalDistance={125.4} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey[10],
    width: "100%",
  },

  bg: {
    height: 235,
    width: "100%",
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: theme.spacing(4),
    borderBottomRightRadius: theme.spacing(4),
  },
  content: {
    flex: 1,
    position: "absolute",
    width: "100%",
    padding: theme.spacing(3),
  },
});

export default profileScreen;
