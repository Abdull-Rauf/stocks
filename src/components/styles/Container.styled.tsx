import styled from "styled-components";

interface PropsType {
  width?: number;
  bgColor?: number;
  margin?: number;
  column?: boolean;
}

const Container = styled.div<PropsType>`
  background-color: ${(props) => props.bgColor || "#fff"};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin || "auto"};
  padding: 5px;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-content: space-between;
`;

export default Container;
