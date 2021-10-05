import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import { getStocksService } from "./services/stocks";

const theme = {
  colors: {
    body: "#FFF",
  },
};

const App = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    symbol: "IBM",
    period: "WEEKLY",
  });

  useEffect(() => {
    getStocksService(state.period, state.symbol).then((res: any) =>
      setData(res.data)
    );
  }, []);
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
