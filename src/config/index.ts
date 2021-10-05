const apiKey = process.env.API_KEY;
const baseURL = `https://www.alphavantage.co/query?apikey=${apiKey}`;

export const getStocksEndpoint = (period: string, symbol: string): string => {
  return `${baseURL}&function=TIME_SERIES_${period}&symbol=${symbol}`;
};
