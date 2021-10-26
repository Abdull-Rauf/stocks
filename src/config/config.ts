const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = `https://www.alphavantage.co/query?apikey=${apiKey}&function=`;
interface DateRangeType {
  label: string;
  value: number;
}

export const getStocksEndpoint = (period: string, symbol: string): string => {
  return `${baseURL}TIME_SERIES_${period}&symbol=${symbol}`;
};
export const dateRangeData: DateRangeType[] = [
  { label: "7D", value: 7 },
  { label: "1M", value: 30 },
  { label: "6M", value: 180 },
  { label: "1Y", value: 365 },
];
