import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import theme from "styles/theme.styles";

export default function ({ style, data, value, onValueChange, label }) {
  return (
    <View style={style ? style : styles.container}>
      <RNPickerSelect
        style={{ inputAndroid: { color: theme.colors.black } }}
        onValueChange={onValueChange}
        value={value}
        placeholder={{ label, color: theme.colors.primary }}
        useNativeAndroidPickerStyle={false}
        Icon={() => (
          <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
        )}
        items={data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  pickerText: {
    color: theme.colors.white,
    fontSize: theme.font.size.medium,
  },
});
