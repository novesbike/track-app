import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Platform,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "styles/theme.styles";
import api from "services/api";

import Welcome from "components/profile";
import CardStats from "components/stats";
import CardActivity from "components/cardActivity";
import { ScrollView } from "react-native-gesture-handler";

function profileScreen(props) {
  const { params } = props.route;
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    function getActivities() {
      api
        .get("v1/activities")
        .then((res) => setActivities(res.data))
        .catch(console.error);
    }
    getActivities();
  }, [params]);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />

      <SafeAreaView style={styles.content}>
        <ScrollView style={styles.scroll}>
          <View style={styles.contentContainer}>
            <View style={styles.bg}></View>
            <Welcome />
            <CardStats />

            <Text style={styles.title}>Atividades recentes</Text>

            <View style={styles.cards}>
              {activities.map((activity) => (
                <CardActivity data={activity} key={activity.id} />
              ))}

              {activities.length === 0 && (
                <View style={styles.feedback}>
                  <Text style={styles.message}>
                    Puxa, está muito quieto por aqui
                  </Text>
                </View>
              )}
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

  scroll: {
    flex: 1,
    backgroundColor: theme.colors.grey[10],
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

  feedback: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: theme.spacing(1),
    ...theme.shadow,
  },

  message: {
    color: theme.colors.grey[30],
    fontFamily: theme.font.roboto.regular,
    paddingVertical: 5,
  },

  cards: {
    height: "100%",
  },
});

export default profileScreen;
