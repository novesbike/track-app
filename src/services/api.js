import axios from "axios";
import HttpErrorsService from "./HttpErrorService";

// const baseURL =
//   "http://ec2-18-228-173-142.sa-east-1.compute.amazonaws.com/api/";

const baseURL = "http://192.168.100.17:8080/api/";

console.log("Current .env baseURL address: %s", baseURL);

const api = axios.create({ baseURL });

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     HttpErrorsService(err.response);
//     return Promise.reject(err);
//   }
// );

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     console.log(err);
//     return Promise.reject(err);
//   }
// );

export default api;
