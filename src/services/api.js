import axios from "axios";

const baseURL =
  "http://ec2-18-228-173-142.sa-east-1.compute.amazonaws.com/api/";

console.log("Current .env baseURL address: %s", baseURL);

const api = axios.create({ baseURL });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (
//       error.request._hasError === true &&
//       error.request._response.includes("connect")
//     ) {
//       Alert.alert(
//         "Aviso",
//         "Não foi possível conectar aos nossos servidores, sem conexão a internet",
//         [{ text: "OK" }],
//         { cancelable: false }
//       );
//     }
//     if (error.response.status === 401) {
//       AsyncStorage.removeItem("@ListApp:userToken");
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
