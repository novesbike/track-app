import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { Alert } from "react-native";

// PROD ou DEV
const baseURL = "https://floating-headland-47248.herokuapp.com";
console.log("Current .env baseURL address: %s", baseURL);

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.request._hasError === true &&
      error.request._response.includes("connect")
    ) {
      Alert.alert(
        "Aviso",
        "Não foi possível conectar aos nossos servidores, sem conexão a internet",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    if (error.response.status === 401) {
      AsyncStorage.removeItem("@ListApp:userToken");
    }

    return Promise.reject(error);
  }
);

export default api;
