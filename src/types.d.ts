declare module 'types' {
    export type Process = {
        browser: boolean;
    };
    export type StocksResponseType = {
        [key: string]: {
            [key: string]: string;
        };
    };
}
