import { FC, useState, useEffect } from "react";
import { LineChart } from "../components/charts";
import DateRange from "../components/DateRange";
import StyledWrapper from "./styles/Wrapper.Styled";
import moment from "moment";
import { DataType, PriceDataType } from "types";

type StocksChartProps = {
  stocksData?: any;
  priceData?: any;
  symbol?: string;
};

interface StateType {
  labels: string[];
  data: string[];
  symbol?: string;
  dateRange: number;
}

const StocksChart: FC<StocksChartProps> = ({ stocksData, symbol }) => {
  const [state, setState] = useState<StateType>({
    labels: [],
    data: [],
    symbol: symbol,
    dateRange: 7,
  });

  const formateData = (data: DataType) => {
    return Object.entries(data).map(([key, value], index) => {
      return {
        date: moment(data[key]).format("D MMM"),
        priceData: value as PriceDataType,
      };
    });
  };
  useEffect(() => {
    const formattedData = formateData(stocksData).map((obj) => {
      return obj;
    });

    const labels = formattedData.map((obj) => obj.date);
    const data = formattedData.map((obj) => obj.priceData["2. high"]);
    state.data = data.slice(0, state.dateRange);
    state.labels = labels.slice(0, state.dateRange);
    setState({
      ...state,
    });
  }, [stocksData, state.dateRange]);

  const handleClick = (value: number): void => {
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
