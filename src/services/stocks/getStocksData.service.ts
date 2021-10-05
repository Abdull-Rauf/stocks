import axios from "axios";
import { StocksResponseType } from "types";
import { getStocksEndpoint } from "../../config";

const getStocksService = async (
  period: string,
  symbol: string
): Promise<any> => {
  const stocksEndpoint = getStocksEndpoint(period, symbol);
  try {
    const response = await axios.get(stocksEndpoint);
    return response;
  } catch (error) {
    console.error();
    return error;
  }
};

export { getStocksService };
