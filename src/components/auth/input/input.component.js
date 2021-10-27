import React from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./input.style";
import theme from "styles/theme.styles";

export default function InputText({
  placeholder,
  leftIcon,
  colorIcon,
  onPressIcon,
  gutterBottom,
  ...props
}) {
  const IfOnPressIcon = ({ children }) =>
    onPressIcon ? (
      <TouchableOpacity onPress={onPressIcon}>{children}</TouchableOpacity>
    ) : (
      <>{children}</>
    );

  return (
    <View style={[styles.containerInput, gutterBottom && styles.gutterBottom]}>
      <TextInput
        placeholder={placeholder}
        style={styles.labelInput}
        {...props}
      />
      {typeof leftIcon === "string" ? (
        <IfOnPressIcon>
          <View style={styles.icon}>
            <Icon
              name={leftIcon}
              size={20}
              color={colorIcon || theme.colors.grey[30]}
            />
          </View>
        </IfOnPressIcon>
      ) : (
        leftIcon
      )}
    </View>
  );
}
