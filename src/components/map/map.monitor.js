import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LocationContext } from "context/location.context";
import theme from "styles/theme.styles";

export default function Monitor() {
  const {
    circuit: { averageSpeed, distanceTravelled },
    timer,
  } = React.useContext(LocationContext);

  const isMeter = distanceTravelled < 1000;

  const distance = {
    value: isMeter
      ? distanceTravelled.toFixed(0)
      : (distanceTravelled / 1000).toFixed(2),
    unit: isMeter ? "m" : "km",
  };

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.row]}>
          <View style={[styles.display, { alignItems: "center" }]}>
            <Text style={styles.subtitle}>cronometro</Text>
            <View style={styles.row}>
              <Text style={[styles.cronometro]}>{timer.cronometro}</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.row,
            {
              flex: 1,
              height: 1,
              backgroundColor: theme.colors.grey[25],
            },
          ]}
        ></View>
        <View style={[styles.row]}>
          <View style={[styles.display]}>
            <Text style={styles.subtitle}>velocidade média</Text>
            <View style={styles.row}>
              <View style={styles.box}>
                <Text style={styles.label}>{averageSpeed.toFixed(2)}</Text>
                <Text style={styles.measurement}>m/s</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: "100%",
              width: 1,
              backgroundColor: theme.colors.grey[25],
              marginHorizontal: theme.spacing(2),
            }}
          />
          <View style={[styles.display]}>
            <Text style={styles.subtitle}>distancia percorrida</Text>
            <View style={styles.row}>
              <View style={styles.box}>
                <Text style={styles.label}>{distance.value}</Text>
                <Text style={styles.measurement}>{distance.unit}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    width: width,
    top: 0,
    left: 0,
    paddingHorizontal: theme.spacing(3),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  display: {
    flex: 1,
    alignItems: "flex-start",
    paddingVertical: theme.spacing(2),
  },
  subtitle: {
    color: theme.colors.grey[25],
    fontFamily: theme.font.roboto.medium,
    textTransform: "uppercase",
    fontSize: theme.font.size.medium,
  },
  cronometro: {
    fontSize: 48,
    fontFamily: theme.font.roboto.bold,
    color: theme.colors.secondary,
  },
  box: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  label: {
    color: theme.colors.secondary,
    fontFamily: theme.font.roboto.bold,
    fontSize: 36,
  },
  measurement: {
    color: theme.colors.grey[30],
    fontSize: theme.font.size.large,
    fontFamily: theme.font.roboto.medium,
    marginBottom: 6.5,
    marginLeft: 6,
  },
});
