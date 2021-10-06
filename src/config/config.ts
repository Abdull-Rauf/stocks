const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = `https://www.alphavantage.co/query?apikey=${apiKey}&function=`;

export const getStocksEndpoint = (period: string, symbol: string): string => {
  return `${baseURL}TIME_SERIES_${period}&symbol=${symbol}`;
};
