import React, { FC, useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Home from "./views/Home.view";
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

  const { symbol, period } = state;

  const fetchStockData = async () => {
    const response = await getStocksService(period, symbol);
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
            <Home data={data} symbol={symbol} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
