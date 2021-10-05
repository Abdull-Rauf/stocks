import axios, { AxiosInstance } from "axios";
const apiKey = process.env.API_KEY;
const endPoint = `https://www.alphavantage.co/query?apikey=${apiKey}&`;

export const stocksClient = (period: string, symbol: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: `${endPoint}function=TIME_SERIES_${period}&symbol=${symbol}`,
  });
  return axiosInstance;
};
