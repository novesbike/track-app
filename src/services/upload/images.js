import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";

export const openLibrary = async () => {
  if (Constants.platform.ios) {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Desculpe, nós precisamos da sua permissão para acessar sua biblioteca!"
      );

      return null;
    }
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
  });

  if (result.cancelled || !result.uri) {
    return null;
  }

  return result.uri;
};

export const openCamera = async () => {
  if (Constants.platform.ios) {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Desculpe, nós precisamos da sua permissão para acessar sua biblioteca!"
      );

      return null;
    }
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
  });

  if (result.cancelled || !result.uri) {
    return null;
  }

  return result.uri;
};
