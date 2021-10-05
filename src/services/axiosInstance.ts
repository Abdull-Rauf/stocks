import axios from "axios";
const baseURL = "https://www.alphavantage.co";

export const axiosInstance = axios.create({
  baseURL,
});
