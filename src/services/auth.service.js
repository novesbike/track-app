import api from "./api";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PREFIX = "@NovesBike";

export const AuthService = {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      api
        .post("auth/login", { email, password })
        .then(({ data }) => {
          AsyncStorage.setItem(PREFIX, data.token);
          setHeaderAuthorization(data.token);
          resolve();
        })
        .catch(({ response }) => {
          console.log(response?.data);
          reject(response?.data?.message);
        });
    });
  },
  register: ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      api
        .post("auth/register", { name, email, password })
        .then(({ data }) => resolve(data))
        .catch(({ response }) => {
          console.log(response?.data);
          reject(response?.data?.message);
        });
    });
  },
  getLoggedUser: async () => {
    try {
      let user = await api.get("auth/user");
      if (user.status !== 200) return false;
      return user.data;
    } catch (error) {
      return false;
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem(PREFIX);
    setHeaderAuthorization(null);
  },
};

function setHeaderAuthorization(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
