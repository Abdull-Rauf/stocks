import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

*{
  box-sizing: border-box;
  padding: 0;
}

body{
  margin: 0;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size:1.15em;

}

`;

export default GlobalStyles;
