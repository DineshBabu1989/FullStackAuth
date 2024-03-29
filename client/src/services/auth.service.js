import axios from "axios";

const API_URL = process.env.REACT_APP_AUTH_API;

const register = (fullname, email, password) => {
  return axios.post(API_URL + "signup", {
    fullname,
    email,
    password,
  });
};

const login = (fullname, password) => {
  return axios
    .post(API_URL + "signin", {
      fullname,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
