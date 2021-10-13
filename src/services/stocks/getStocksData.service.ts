import axios from "axios";
import { getStocksEndpoint } from "../../config";

const getStocksService = async (
  period: string,
  symbol: string
): Promise<Record<string, any>> => {
  const stocksEndpoint = getStocksEndpoint(period, symbol);
  try {
    const response = await axios.get(stocksEndpoint);
    return response.data;
  } catch (error) {
    console.error();
    return {
      error,
    };
  }
};

export { getStocksService };
