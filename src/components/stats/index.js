import React from "react";
import { View, Text, StyleSheet } from "react-native";

import theme from "styles/theme.styles";
import globalStyle from "styles/global.styles";

function CardStats({ totalTime, totalDistance }) {
  return (
    <View style={[styles.stats, globalStyle.boxShadow]}>
      <View>
        <Text style={styles.title}>Minhas estatísticas</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.subtitle}>Tempo total</Text>
          <Text style={styles.statsValue}>{totalTime}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.subtitle}>Distância total</Text>
          <View style={styles.rowStats}>
            <Text style={styles.statsValue}>{totalDistance.toFixed(1)}</Text>
            <Text style={styles.km}>km</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stats: {
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.large,
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
  },

  title: {
    color: theme.colors.grey[30],
    fontFamily: theme.font.medium,
    marginBottom: theme.spacing(2),
  },

  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subtitle: {
    color: theme.colors.grey[30],
    fontFamily: theme.font.regular,
    textTransform: "uppercase",
    fontSize: theme.font.size.small,
  },

  statsValue: {
    color: theme.colors.primary,
    fontSize: theme.font.size.extra_large,
    fontFamily: theme.font.medium,
  },

  km: {
    fontSize: theme.font.size.medium,
    fontFamily: theme.font.regular,
    marginBottom: 3,
    marginLeft: 3,
    color: theme.colors.primary,
  },

  rowStats: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default CardStats;
