import React from "react";
import { Text, View } from "react-native";
import styles from "./card.style";

export default function Card({ title, subtitle, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {children}
    </View>
  );
}
