export interface State {
    isDisabled: boolean;
    region:string,
    europeCountryList: any;
    asiaCountryList:any,
    regionList:Array<string>,
    error:any;
  }

export interface CountryData {
    name: string;
    capital: number;
    population: number;
    currencies: string;
    flag:string;
    region:string;
}