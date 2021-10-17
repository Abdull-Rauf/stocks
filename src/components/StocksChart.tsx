import { FC, useState, useEffect } from "react";
import { LineChart } from "../components/charts";
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
    state.data = data.slice(0, 10);
    state.labels = labels.slice(0, 10);
    setState({
      ...state,
    });
  }, [stocksData]);
  return (
    <StyledWrapper>
      <LineChart stocksData={state} />
    </StyledWrapper>
  );
};
export default StocksChart;
