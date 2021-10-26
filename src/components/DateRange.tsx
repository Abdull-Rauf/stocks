import { FC } from "react";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import { dateRangeData } from "../config/config";
import { HandleClickType, DateRangeType } from "types";

const DateRange: FC<HandleClickType> = ({ handleClick }) => {
  return (
    <Container>
      {dateRangeData.map((range: DateRangeType, i: number) => {
        return (
          <Button onClick={() => handleClick(range.value)} key={i}>
            {range.label}
          </Button>
        );
      })}
    </Container>
  );
};

export default DateRange;
