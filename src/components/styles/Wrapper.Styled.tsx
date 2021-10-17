import styled from "styled-components";

interface PropsType {
  width?: number;
  bgColor?: number;
}

const StyledWrapper = styled.div<PropsType>`
  background-color: #fff;
  width: 60vw;
  margin: 10px;
`;

export default StyledWrapper;
