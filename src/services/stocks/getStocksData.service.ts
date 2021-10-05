import { StocksResponseType } from "types";
import { stocksClient } from "../axiosInstance";

const getStocksService = async (
  period: string,
  symbol: string
): Promise<any> => {
  const client = stocksClient(period, symbol);
  try {
    const response = await client.get();
    return response;
  } catch (error) {
    console.error();
    return error;
  }
};

export { getStocksService };
