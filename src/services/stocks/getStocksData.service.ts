import axios from "axios";
import { axiosInstance } from "../axiosInstance.service";

const getStocksService = async (
  period: string,
  symbol: string
): Promise<Record<string, any>> => {
  const apikey = process.env.REACT_APP_API_KEY;
  try {
    const response = await axiosInstance.get("", {
      params: {
        function: `TIME_SERIES_${period}`,
        symbol,
        apikey,
      },
    });
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};

export { getStocksService };
