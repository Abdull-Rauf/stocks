import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";

const DateRange = ({ handleClick }: any) => {
  const dateRangeData: any = [
    { label: "7D", value: 7 },
    { label: "1M", value: 30 },
    { label: "6M", value: 180 },
    { label: "1Y", value: 365 },
  ];

  return (
    <Container>
      {dateRangeData.map((range: any, i: number) => {
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
