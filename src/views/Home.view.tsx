import StocksChart from "../components/StocksChart";
import Container from "../components/styles/Container.styled";
import SearchBar from "../components/SearchBar";

const Home = ({ data, symbol }: any) => {
  return (
    <Container>
      <SearchBar />
      <StocksChart stocksData={data} symbol={symbol} />
    </Container>
  );
};

export default Home;
