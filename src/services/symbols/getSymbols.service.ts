import { axiosInstance } from "../axiosInstance.service";

const getSymbolService = async (
  symbol: string
): Promise<Record<string, any>> => {
  const apikey = process.env.REACT_APP_API_KEY;
  try {
    const response = await axiosInstance.get("", {
      params: {
        function: "SYMBOL_SEARCH",
        keywords: symbol,
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

export { getSymbolService };
