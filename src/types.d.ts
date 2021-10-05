declare module "types" {
  export type Process = {
    browser: boolean;
  };
  export type MetaDataType = {
    [key: string]: string;
  };
  export type StocksDataType = {
    [key: string]: string;
  };
  export type StocksResponseType = {
    [key: string]: MetaDataType;
    [key: string]: {
      [key: string]: StocksDataType;
    };
    error?: string;
  };
}
