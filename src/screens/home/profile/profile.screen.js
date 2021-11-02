import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";

import theme from "styles/theme.styles";
import globalStyle from "styles/global.styles";

function profileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle="light-content" />
      <View style={styles.bg}></View>
      <SafeAreaView style={styles.content}>
        <View style={styles.profile}>
          <View>
            <Image
              style={styles.avatar}
              source={require("assets/avatar.jpg")}
            />
          </View>
          <View style={styles.welcome}>
            <Text
              style={{
                color: theme.colors.white,
                fontFamily: theme.font.light,
              }}
            >
              Bem vindo
            </Text>
            <Text style={styles.name}>Joao Nobre</Text>
          </View>
          <View>
            <Icons name={"md-settings"} size={20} color="white" />
          </View>
        </View>
        <View style={[styles.stats, globalStyle.boxShadow]}>
          <View>
            <Text style={styles.title}>Minhas estatísticas</Text>
          </View>
          <View style={styles.cardContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.subtitle}>Tempo total</Text>
              <Text style={styles.statsValue}>10:30:23</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.subtitle}>Distância total</Text>
              <View style={styles.rowStats}>
                <Text style={styles.statsValue}>122</Text>
                <Text style={styles.km}>km</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
const width = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey[10],
    width: width,
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

  profile: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: `center`,
    paddingHorizontal: theme.spacing(2),
    marginTop: theme.spacing(3),
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: theme.colors.white,
    borderWidth: 1,
  },

  welcome: {
    flex: 1,
    padding: theme.spacing(2),
  },

  name: {
    color: theme.colors.white,
    fontFamily: theme.font.regular,
    fontSize: 20,
    marginTop: 6,
  },

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
    fontFamily: theme.font.medium,
    marginBottom: 3,
    marginLeft: 3,
    color: theme.colors.primary,
  },

  rowStats: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default profileScreen;
