import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import theme from "styles/theme.styles";
import globalStyle from "styles/global.styles";

function CardStats({ totalTime, totalDistance, totalAverageSpeed }) {
  return (
    <View style={[styles.stats, globalStyle.boxShadow]}>
      <View style={styles.cardTop}>
        <View>
          <Ionicons name="stats-chart" size={18} color={theme.colors.primary} />
        </View>
        <Text style={styles.title}>Minhas estatísticas</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.subtitle}>Velocidade média</Text>
          {
            totalAverageSpeed ? (
              <View style={styles.rowStats}>
                <Text style={styles.statsValue}>{totalAverageSpeed}</Text>
                <Text style={styles.km}>km/h</Text>
              </View>
            ): <Text style={styles.statsValue}>-</Text>
          }
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.subtitle}>Distância total</Text>
          {
            totalDistance ? (
              <View style={styles.rowStats}>
                <Text style={styles.statsValue}>{totalDistance}</Text>
                <Text style={styles.km}>km</Text>
              </View>
            ): <Text style={styles.statsValue}>-</Text>
          }
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
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: theme.spacing(2.5),
  },
  title: {
    flex: 1,
    color: theme.colors.grey[25],
    fontFamily: theme.font.roboto.bold,
    marginLeft: theme.spacing(1),
  },

  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subtitle: {
    color: theme.colors.grey[25],
    fontFamily: theme.font.roboto.regular,
    textTransform: "uppercase",
    fontSize: theme.font.size.small,
    marginBottom: 3,
  },

  statsValue: {
    color: theme.colors.primary,
    fontSize: theme.font.size.extra_large,
    fontFamily: theme.font.medium,
  },

  km: {
    fontSize: theme.font.size.medium,
    fontFamily: theme.font.roboto.regular,
    color: theme.colors.primary,
    marginBottom: 3.5,
    marginLeft: 3,
  },

  rowStats: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default CardStats;
