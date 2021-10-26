declare module "types" {
  export type Process = {
    browser: boolean;
  };
  export type StocksResponseType = {
    [key: string]: {
      [key: string]: any;
    };
    priceData?: any;
  };
  export type PriceDataType = {
    [key: string]: string;
  };
  export type DataType = {
    [key: string]: PriceDataType;
  };
  export type HandleClickType = {
    handleClick: (arg) => void;
  };
  export type DateRangeType = {
    label: string;
    value: number;
  };
}
