import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "styles/theme.styles";
import globalStyle from "styles/global.styles";
import { TouchableOpacity } from "react-native-gesture-handler";

function formatDate(value) {
  return value.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
}

function cardActivity({ data }) {
  return (
    <View style={[styles.cardContent, globalStyle.boxShadow]}>
      <TouchableOpacity>
        <View style={styles.cardTop}>
          <View style={styles.iconBike}>
            <MaterialCommunityIcons
              name="bike"
              size={20}
              color={theme.colors.primary}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.date}>{formatDate(data.date)}</Text>
            <Text style={styles.cardTitle}>{data.title}</Text>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <View style={{ flex: 1 }}>
            <Text style={styles.subtitle}>Duração</Text>
            <Text style={styles.number}>{data.timing}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.subtitle}>Distância percorrida</Text>
            <View style={styles.distance}>
              <Text style={styles.number}>{data.distance.toFixed(1)}</Text>
              <Text style={styles.km}>km</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.small,
    marginBottom: theme.spacing(1.3),
  },

  iconBike: {
    borderWidth: 1,
    height: 35,
    width: 35,
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22.5,
    borderColor: theme.colors.primaryLight,
  },

  date: {
    color: theme.colors.grey[25],
    fontFamily: theme.font.roboto.medium,
    fontSize: theme.font.size.small,
  },

  cardTitle: {
    fontFamily: theme.font.roboto.medium,
    fontSize: theme.font.size.large,
    color: theme.colors.grey[30],
    marginTop: 2,
  },

  subtitle: {
    color: theme.colors.grey[25],
    fontFamily: theme.font.roboto.regular,
    fontSize: theme.font.size.small,
    textTransform: "uppercase",
    marginBottom: 2,
  },

  cardTop: {
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(3),
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.radius.small,
    borderTopRightRadius: theme.radius.small,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey[20],
    flexDirection: "row",
  },

  cardBottom: {
    paddingVertical: theme.spacing(1),
    paddingHorizontal: theme.spacing(3),
    backgroundColor: theme.colors.grey[10],
    flexDirection: "row",
    borderBottomLeftRadius: theme.radius.small,
    borderBottomRightRadius: theme.radius.small,
  },

  cardText: {
    flex: 1,
    marginLeft: theme.spacing(2),
  },

  number: {
    color: theme.colors.secondary,
    color: theme.colors.grey[30],
    fontFamily: theme.font.medium,
    fontSize: theme.font.size.large_plus,
  },

  distance: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  km: {
    color: theme.colors.grey[30],
    fontSize: theme.font.size.small,
    fontFamily: theme.font.roboto.regular,
    marginBottom: 3,
    marginLeft: 3,
  },
});

export default cardActivity;
