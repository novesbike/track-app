import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import theme from "styles/theme.styles";

function formatDate(value) {
  return value.split("T")[0].replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
}

export default function Info({
  date = new Date().toJSON(),
  duration = "-",
  distance = 0,
  average_speed = 0,
  altimetria = 0,
}) {
  const isMeter = distance < 1000;

  const distance_travelled = {
    value: isMeter ? distance.toFixed(0) : (distance / 1000).toFixed(2),
    unit: isMeter ? "m" : "km",
  };

  const speed = average_speed;

  return (
    <>
      <View style={styles.info}>
        <Text style={styles.date}>{formatDate(date)}</Text>
        <View style={styles.row}>
          <View style={styles.boxInfo}>
            <Text style={styles.subtitleInfo}>DURAÇÃO</Text>
            <Text style={styles.textInfo}>{duration}</Text>
          </View>
          <View style={styles.boxInfo}>
            <Text style={styles.subtitleInfo}>DISTÂNCIA PERCORRIDA</Text>
            <View style={styles.row}>
              <Text style={styles.textInfo}>{distance_travelled.value}</Text>
              <Text style={styles.measure}>{distance_travelled.unit}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.boxInfo}>
            <Text style={styles.subtitleInfo}>VELOCIDADE MÉDIA</Text>
            <View style={styles.row}>
              <Text style={styles.textInfo}>{speed.toFixed(2)}</Text>
              <Text style={styles.measure}>km/h</Text>
            </View>
          </View>
          <View style={styles.boxInfo}>
            <Text style={styles.subtitleInfo}>ALTIMETRIA</Text>
            <View style={styles.row}>
              <Text style={styles.textInfo}>{altimetria}</Text>
              <Text style={styles.measure}>m</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  info: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  date: {
    color: "#A9A9A9",
    fontFamily: theme.font.roboto.regular,
  },
  title: {
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontFamily: theme.font.roboto.bold,
    fontSize: 20,
  },
  subtitle: {
    color: "#B0B0B0",
    fontFamily: theme.font.roboto.regular,
  },
  text: {
    fontFamily: theme.font.roboto.regular,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
  },
  boxInfo: {
    flex: 1,
    marginTop: theme.spacing(2),
  },
  subtitleInfo: {
    color: "#B0B0B0",
    fontFamily: theme.font.roboto.regular,
    fontSize: theme.font.size.small,
  },
  textInfo: {
    fontFamily: theme.font.roboto.bold,
    color: theme.colors.secondary,
    fontSize: 26,
  },
  measure: {
    alignSelf: "flex-end",
    paddingBottom: 3,
    paddingLeft: 5,
    fontFamily: theme.font.roboto.medium,
  },
});
