import api from "./api";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

const PREFIX = "@NovesBike";

//{token:String,user:object}

export const AuthService = {
  /**
   * LOGIN: faz comunicação com a api e salva em um storage
   *
   * CASO DO SUCESSO: grava os dados da resposta em um storage
   * e retorna um Promise resolve com os dados do usuário
   *
   * CASO DE FALHA: irá retornar um Promise Reject com uma
   * mensagem amigável.
   */
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      api
        .post("/login", { email, password })
        .then(({ data }) => {
          AsyncStorage.setItem(PREFIX, JSON.stringify(data));

          setHeaderAuthorization(data.token);
          resolve(data);
        })
        .catch(() => reject("Credenciais inválidas"));
    });
  },
  getLoggedUser: async () => {
    try {
      let user = await AsyncStorage.getItem(PREFIX);
      let parse = JSON.parse(user);

      if (!parse.token) return false;
      setHeaderAuthorization(parse.token);
      return parse.user;
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
