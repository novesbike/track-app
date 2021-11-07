import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Dimensions,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "styles/theme.styles";
import mock from "mocks/myActivities";

import Welcome from "components/profile";
import CardStats from "components/stats";
import CardActivity from "components/cardActivity";
import { ScrollView } from "react-native-gesture-handler";

function profileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />

      <SafeAreaView style={styles.content}>
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.bg}></View>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const width = Math.round(Dimensions.get("window").width);
const android = Platform.OS == "android" ? 0 : undefined;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey[10],
    width: "100%",
  },

  bg: {
    position: "absolute",
    height: Platform.OS == "android" ? 192 : 210,
    width: width + 1,
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: theme.spacing(4),
    borderBottomRightRadius: theme.spacing(4),
  },

  content: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.secondary,
  },

  contentContainer: {
    padding: theme.spacing(3),
    backgroundColor: theme.colors.grey[10],
    paddingTop: android,
  },

  title: {
    color: theme.colors.grey[30],
    fontFamily: theme.font.roboto.medium,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
  },

  cards: {
    height: "100%",
  },
});

export default profileScreen;
