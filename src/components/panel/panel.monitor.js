import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LocationContext } from "context/location.context";
import theme from "styles/theme.styles";
const width = Math.round(Dimensions.get("window").width);

export default function Panel({ children }) {
  const { circuit, timer } = React.useContext(LocationContext);

  const isMeter = circuit.distanceTravelled < 1000;

  const distance = {
    value: isMeter
      ? circuit.distanceTravelled.toFixed(0)
      : (circuit.distanceTravelled / 1000).toFixed(2),
    unit: isMeter ? "m" : "km",
  };

  const recordingText = () => {
    if (timer.isActive) {
      return timer.isPaused ? "PAUSADO" : "GRAVANDO";
    } else return "";
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{recordingText()}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.cronometro}>
          <Text style={styles.title}>CRONÔMETRO</Text>
          <Text style={styles.cronometroText}>{timer.cronometro}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.title}>VELOCIDADE ATUAL</Text>
            <Text style={styles.number}>{circuit.speed.toFixed(2)}</Text>
            <Text style={styles.metric}>km/h</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>VELOCIDADE MÉDIA</Text>
            <Text style={styles.number}>{circuit.averageSpeed.toFixed(2)}</Text>
            <Text style={styles.metric}>km/h</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.title}>DISTÂNCIA PERCORRIDA</Text>
            <Text style={styles.number}>{distance.value}</Text>
            <Text style={styles.metric}>{distance.unit}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>ALTIMETRIA</Text>
            <Text style={styles.number}>{circuit.altimetria || 0}</Text>
            <Text style={styles.metric}>m</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>{children}</View>
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
  header: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  footer: {
    width: width,
    padding: 20,
    flexDirection: "row",
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
