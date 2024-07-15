import axios from "axios";

let baseURL = "";

const secureApi = axios.create({
  baseURL: baseURL,
});

// Add a request interceptor
secureApi.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default secureApi;
