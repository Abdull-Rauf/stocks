import StocksChart from "../components/StocksChart";

const Home = ({ data, symbol }: any) => {
  return <StocksChart stocksData={data} symbol={symbol} />;
};

export default Home;
