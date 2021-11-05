import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
} from "react-native";
import theme from "styles/theme.styles";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import Constants from "expo-constants";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import AuthContext from "context/auth.context";
import { openCamera, openLibrary } from "services/upload/images";

function editProfile() {
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();
  const { user, updateProfile } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState();
  const [avatar, setAvatar] = React.useState();

  React.useLayoutEffect(() => {
    setName(user.name);
    setAvatar(user.avatar);
  }, [user]);

  const updateAccountProfile = () => {
    setLoading(true);
    setTimeout(() => {
      updateProfile({ name: name, avatar: avatar });
      setLoading(false);
      navigation.navigate("Profile");
    }, 2000);
  };

  const camera = async () => {
    const result = await openCamera();
    setAvatar(result);
  };

  const library = async () => {
    const result = await openLibrary();
    setAvatar(result);
  };

  const openActionSheet = () => {
    const icon = (name, color) => (
      <MaterialIcons key={name} name={name} color={color && color} size={20} />
    );

    const options = ["Câmera", "Galeria", "Cancelar"];
    const icons = [
      icon("camera-alt"),
      icon("photo-library"),
      icon("cancel-presentation", "#d95050"),
    ];
    const destructiveButtonIndex = 2;
    const cancelButtonIndex = 2;
    const textStyle = {
      fontFamily: theme.font.roboto.medium,
    };

    showActionSheetWithOptions(
      {
        options,
        icons,
        textStyle,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (index) => {
        switch (index) {
          case 0:
            camera();
            break;
          case 1:
            library();
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={Constants.platform.ios ? "dark-content" : "light-content"}
        backgroundColor={theme.colors.secondary}
      />
      <View style={[styles.containerImage]}>
        <Avatar
          rounded
          size="xlarge"
          title={user.name.charAt(0)}
          onPress={openActionSheet}
          source={{ uri: avatar }}
        />
        <TouchableOpacity style={{ marginTop: 10 }} onPress={openActionSheet}>
          <Text style={styles.text}>Trocar de foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerInputs}>
        <View>
          <View style={styles.borderInput}>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
            />
          </View>
          <Text style={styles.text}>Pode ser seu nome ou apelido</Text>
        </View>
        <Button
          dark
          mode="outlined"
          color={theme.colors.primary}
          uppercase={false}
          labelStyle={styles.label}
          style={styles.button}
          onPress={updateAccountProfile}
          loading={loading}
        >
          {loading ? "atualizando" : "salvar"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    padding: theme.spacing(5),
  },

  containerImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerInputs: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingTop: theme.spacing(3),
  },

  avatar: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 75,
    borderColor: theme.colors.white,
    marginVertical: theme.spacing(3),
  },

  text: {
    fontFamily: theme.font.roboto.medium,
    color: theme.colors.grey[25],
    textAlign: "center",
  },

  borderInput: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[25],
    // backgroundColor: "red",
    marginBottom: theme.spacing(1),
    width: "100%",
  },

  input: {
    fontSize: 40,
    height: 60,
    fontFamily: theme.font.roboto.bold,
    textAlign: "center",
  },

  label: {
    fontFamily: "open-sans-bold",
    fontSize: theme.font.size.medium,
  },
  button: {
    marginTop: theme.spacing(5),
    borderRadius: theme.spacing(4),
    borderColor: theme.colors.primary,
    borderWidth: 0.5,
  },
});

export default editProfile;
