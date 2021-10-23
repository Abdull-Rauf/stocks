import { FC, useState, useEffect } from "react";
import { LineChart } from "../components/charts";
import DateRange from "../components/DateRange";
import StyledWrapper from "./styles/Wrapper.Styled";
import moment from "moment";
type StocksChartProps = {
  stocksData?: any;
  priceData?: any;
  symbol?: string;
};

const StocksChart: FC<StocksChartProps> = ({ stocksData, symbol }) => {
  const [state, setState] = useState<any>({
    labels: [],
    data: [],
    symbol: symbol,
    dateRange: 7,
  });

  const formateData = (data: any) => {
    return Object.entries(data).map((entries) => {
      const [date, priceData] = entries;
      return {
        date: moment(date).format("D MMM"),
        priceData,
      };
    });
  };
  useEffect(() => {
    const formattedData = formateData(stocksData).map((obj: any) => {
      return obj;
    });

    const labels = formattedData.map((obj: any) => obj.date);
    const data = formattedData.map((obj: any) => obj.priceData["2. high"]);
    state.data = data.slice(0, state.dateRange);
    state.labels = labels.slice(0, state.dateRange);
    setState({
      ...state,
    });
  }, [stocksData, state.dateRange]);

  const handleClick = (value: number) => {
    setState({ ...state, dateRange: value });
  };
  return (
    <StyledWrapper>
      <DateRange handleClick={handleClick} />
      <LineChart stocksData={state} />
    </StyledWrapper>
  );
};
export default StocksChart;
