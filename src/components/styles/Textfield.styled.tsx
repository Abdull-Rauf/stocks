import styled from "styled-components";

const TextField = styled.input`
  width: 15vw;
  height: 30px;
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: transparent;
  border-radius: 15px;
  &:focus {
    border: 1px solid #ccc;
  }
`;

export default TextField;
