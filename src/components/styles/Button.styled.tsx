import styled from "styled-components";

const Button = styled.button`
  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid grey;
  border-radius: 12px;
  background: transparent;
  color: grey;
  cursor: pointer;
  &:hover {
    color: #31d0ad;
  }
`;

export default Button;
