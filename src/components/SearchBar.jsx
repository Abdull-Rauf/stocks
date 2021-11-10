import { useEffect, useState } from "react";
import TextField from "./styles/Textfield.styled";
import { getSymbolService } from "../services/symbols";
import Container from "./styles/Container.styled";

const SearchBar = () => {
  const [state, setSate] = useState({
    symbol: "",
    companyData: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSate({ ...state, symbol: e.target.value });
  };

  useEffect(() => {
    getSymbolService(state.symbol).then((res) => {
      setSate({ ...state, companyData: res.bestMatches });
    });
  }, [state.symbol]);
  console.log(state.companyData);
  return (
    <Container column>
      <TextField
        type="text"
        value={state.symbol}
        onChange={handleChange}
        name="symbol"
      ></TextField>

      <Container column>
        {state.companyData !== undefined &&
          state.companyData.map((company, i) => {
            return (
              <Container>
                <h5 key={i}>{company["1. symbol"]}</h5>
                <h5 key={i}>{company["2. name"]}</h5>
              </Container>
            );
          })}
      </Container>
    </Container>
  );
};

export default SearchBar;
