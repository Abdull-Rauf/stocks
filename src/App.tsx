import React, { FC, useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import StocksChartScreen from "./views/StocksChartScreen";
import { getStocksService } from "./services/stocks";
import { StocksResponseType } from "types";

const theme = {
  colors: {
    body: "#FFF",
  },
};

const App: FC<StocksResponseType> = () => {
  const [data, setData] = useState<any>({});
  const [state, setState] = useState({
    symbol: "IBM",
    period: "DAILY",
  });

  const fetchStockData = async () => {
    const response = await getStocksService(state.period, state.symbol);
    setData(response["Time Series (Daily)"]);
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Router>
        <Switch>
          <Route path="/stocks" exact>
            <StocksChartScreen stocksData={data} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
