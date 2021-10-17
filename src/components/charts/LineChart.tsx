import { FC } from "react";
import { Line } from "react-chartjs-2";

type StocksChartScreenType = {
  stocksData?: any;
  priceData?: any;
};

const LineChart: FC<StocksChartScreenType> = ({ stocksData }): JSX.Element => {
  const canvas = document.createElement("canvas");
  const ctx: any = canvas.getContext("2d");
  ctx.fillRect(-20, 20, 150, 100);
  let gradient = ctx.createLinearGradient(-100, 470, 100, -100);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "#31d0ad");

  const data = {
    labels: stocksData.labels,
    datasets: [
      {
        label: "High",
        data: stocksData.data,
        fill: true,
        backgroundColor: gradient,
        borderColor: "#31d0ad",
        borderWidth: 0.5,
        tension: 0.5,
      },
    ],
  };
  const options: any = {
    plugins: {
      title: {
        display: true,
        text: stocksData.symbol,
      },
      legend: {
        labels: {
          display: true,
          label: "High",
          boxHeight: "3",
        },
        display: true,
        position: "right",
        maxHeight: "3px",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export { LineChart };
