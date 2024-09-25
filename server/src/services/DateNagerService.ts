import { FailedToGetCountryInfo } from '../config/errors/classes/SystemErrors';
import AxiosService from './AxiosService';

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
  borders: { commonName: string; officialName: string; countryCode: string; region: string; borders: null }[];
}

interface ICountryPopulation {
  country: string;
  code: string;
  iso3: string;
  populationCount: { year: number; value: number };
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

class DateNagerService {
  async getCountriesAvailable(): Promise<IGetCountriesAvailable> {
    try {
      const countriesAvailable = await AxiosService<TCountriesAvailable[]>({
        url: 'https://date.nager.at/api/v3/AvailableCountries',
      });

      const countriesFlags = await this.getCountriesFlags();

      if (!countriesAvailable.data) throw new FailedToGetCountryInfo();

      const countriesWithFlags = countriesAvailable.data.map((country) => {
        const flag = countriesFlags.find((info) => info.iso2 === country.countryCode);
        return { ...country, countryFlag: flag?.flag, iso3: flag?.iso3 };
      });

      return { countriesAvailable: countriesWithFlags };
    } catch (err) {
      console.log('Failed to get');

      setTimeout(() => {}, 1000);
      return this.getCountriesAvailable();
    }
  }

  async getCountrySpecificDetails(countryCode: string): Promise<{ details: ICountrySpecificDetails }> {
    try {
      const countryDetails = await AxiosService<ICountrySpecificDetails>({
        url: `https://date.nager.at/api/v3/CountryInfo/${countryCode}`,
      });

      if (!countryDetails.data) throw new FailedToGetCountryInfo();

      return { details: countryDetails.data };
    } catch (err) {
      console.log('Failed to get');

      setTimeout(() => {}, 1000);
      return this.getCountrySpecificDetails(countryCode);
    }
  }

  async getCountriesPopulationHistory() {
    try {
      const countries = await AxiosService<{ error: boolean; msg: string; data: ICountryPopulation[] }>({
        url: 'https://countriesnow.space/api/v0.1/countries/population',
      });
    } catch (err) {
      console.log('Failed to get');
    }
  }

  async getCountryPopulationHistory(iso3: string): Promise<ICountryPopulation | undefined> {
    try {
      const countriesPopulation = await AxiosService<{ error: boolean; msg: string; data: ICountryPopulation[] }>({
        url: 'https://countriesnow.space/api/v0.1/countries/population',
      });
      if (!countriesPopulation.data || countriesPopulation.data.error)
        throw new FailedToGetCountryInfo(countriesPopulation.data?.msg);

      const countryPopulation = countriesPopulation.data.data.find((cp) => cp.iso3 === iso3);
      if (!countryPopulation) return undefined;

      return countryPopulation;
    } catch (err) {
      console.log('Failed to get');
    }
  }

  async getCountriesFlags(): Promise<ICountryFlag[]> {
    try {
      const countriesFlags = await AxiosService<{ error: boolean; msg: string; data: ICountryFlag[] }>({
        url: 'https://countriesnow.space/api/v0.1/countries/flag/images',
      });

      if (!countriesFlags.data || countriesFlags.data.error) throw new FailedToGetCountryInfo(countriesFlags.data?.msg);

      return countriesFlags.data.data;
    } catch (err) {
      console.log('Failed to get');

      setTimeout(() => {}, 1000);
      return this.getCountriesFlags();
    }
  }
}

export default new DateNagerService();
