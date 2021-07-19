import axios from "axios";

const API_URL = process.env.REACT_APP_PROTECTED_ROUTES;

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export default {
  getPublicContent
};
