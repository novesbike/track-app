import React from "react";
import { View, StyleSheet, StatusBar, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "styles/theme.styles";
import mock from "mocks/myActivities";

import Welcome from "components/profile";
import CardStats from "components/stats";
import CardActivity from "components/cardActivity";
import { ScrollView } from "react-native-gesture-handler";

function profileScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar animated={true} barStyle="light-content" />

        <View style={styles.bg}></View>
        <SafeAreaView style={styles.content}>
          <Welcome />
          <CardStats
            totalTime={mock.total_timing}
            totalDistance={mock.total_distance}
          />

          <Text style={styles.title}>Atividades recentes</Text>

          <View style={styles.cards}>
            {mock.activities.map((activity) => (
              <CardActivity data={activity} key={activity.id} />
            ))}
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
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

  title: {
    color: theme.colors.grey[30],
    fontFamily: theme.font.medium,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
  },

  cards: {
    height: "100%",
  },
});

export default profileScreen;
