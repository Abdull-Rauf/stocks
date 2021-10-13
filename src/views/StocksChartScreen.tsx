import { FC, useState, useEffect } from "react";
import { StocksChart } from "../components/charts";
import moment from "moment";
type StocksChartScreenProps = {
  stocksData?: any;
  priceData?: any;
};

const StocksChartScreen: FC<StocksChartScreenProps> = ({ stocksData }) => {
  const [state, setState] = useState<any>({
    labels: [],
    data: [],
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
    const abc = formateData(stocksData).map((obj: any) => {
      return obj;
    });

    const labels = abc.map((obj: any) => obj.date);
    const data = abc.map((obj: any) => obj.priceData["2. high"]);
    state.data = data.slice(0, 10);
    state.labels = labels.slice(0, 10);
    setState({
      ...state,
    });
  }, [stocksData]);
  return (
    <div
      style={{
        width: "70vw",
        margin: "auto",
      }}
    >
      <StocksChart stocksData={state} />
    </div>
  );
};

export default StocksChartScreen;
