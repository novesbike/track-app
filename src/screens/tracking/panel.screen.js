import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import theme from "styles/theme.styles";
import Controls from "components/map/map.controls";

const width = Math.round(Dimensions.get("window").width);

export default function PanelScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.text]}>GRAVANDO</Text>
        </View>

        <View style={styles.cronometro}>
          <Text style={styles.title}>CRONÔMETRO</Text>
          <Text style={styles.cronometroText}>01:10:57</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.title}>VELOCIDADE ATUAL</Text>
            <Text style={styles.number}>11.4</Text>
            <Text style={styles.metric}>Km/h</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>VELOCIDADE MÉDIA</Text>
            <Text style={styles.number}>10.2</Text>
            <Text style={styles.metric}>Km/h</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.title}>DISTÂNCIA PERCORRIDA</Text>
            <Text style={styles.number}>12.2</Text>
            <Text style={styles.metric}>Km</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>ALTIMETRIA</Text>
            <Text style={styles.number}>5.49</Text>
            <Text style={styles.metric}>M</Text>
          </View>
        </View>
      </View>
      <Controls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: theme.colors.grey[10],
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  header: {
    flex: 1,
  },
  text: {
    marginBottom: 10,
    fontFamily: theme.font.roboto.regular,
    fontSize: theme.font.size.small,
  },
  cronometro: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: theme.colors.grey[20],
    width: "100%",
  },
  title: {
    fontFamily: theme.font.roboto.medium,
    color: theme.colors.grey[25],
    fontSize: theme.font.size.small,
  },
  cronometroText: {
    fontFamily: theme.font.roboto.bold,
    color: theme.colors.secondary,
    fontSize: 72,
    lineHeight: 82,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: theme.colors.grey[20],
  },
  left: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 2,
    paddingVertical: 20,
    borderColor: theme.colors.grey[20],
  },
  right: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  number: {
    fontFamily: theme.font.roboto.bold,
    color: theme.colors.secondary,
    fontSize: 64,
    lineHeight: 74,
  },
  metric: {
    fontFamily: theme.font.roboto.medium,
    color: theme.colors.secondary,
    fontSize: 20,
    marginTop: -10,
  },
});
