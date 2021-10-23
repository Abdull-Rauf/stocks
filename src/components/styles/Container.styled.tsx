import styled from "styled-components";

interface PropsType {
  width?: number;
  bgColor?: number;
  margin?: number;
}

const Container = styled.div<PropsType>`
  background-color: ${(props) => props.bgColor || "#fff"};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin || "auto"};
  display: flex;
  align-content: space-between;
`;

export default Container;
