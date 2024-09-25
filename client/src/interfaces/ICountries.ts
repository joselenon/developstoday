type TCountriesAvailable = { countryCode: string; name: string };
interface ICountryWithFlag extends TCountriesAvailable {
  countryFlag?: string;
  iso3?: string;
}

interface ICountrySpecificDetails {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: { commonName: string; officialName: string; countryCode: string; region: string; borders: any }[];
}

interface ICountryPopulation {
  country: string;
  code: string;
  iso3: string;
  populationCounts: { year: number; value: number }[];
}

interface ICountryFlag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

interface IGetCountriesAvailable {
  countriesAvailable: ICountryWithFlag[];
}
