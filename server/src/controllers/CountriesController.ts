import { Request, Response, NextFunction } from 'express';
import { responseBody } from '../helpers/responseHelpers';
import DateNagerService from '../services/DateNagerService';
import { InvalidPayloadError } from '../config/errors/classes/SystemErrors';

class CountriesController {
  async getCountriesAvailable(req: Request, res: Response, next: NextFunction) {
    try {
      const countriesAvailable = await DateNagerService.getCountriesAvailable();

      res.status(200).json(responseBody({ success: true, message: 'GET_MSG', data: countriesAvailable }));
    } catch (err) {
      next(err);
    }
  }

  async getCountrySpecificDetails(req: Request, res: Response, next: NextFunction) {
    try {
      const { countryCode } = req.body;
      if (!countryCode) throw new InvalidPayloadError();

      const countryDetails = await DateNagerService.getCountrySpecificDetails(countryCode);

      res.status(200).json(responseBody({ success: true, message: 'GET_MSG', data: countryDetails }));
    } catch (err) {
      next(err);
    }
  }

  async getCountryPopulationHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const { countryCode } = req.body;
      if (!countryCode) throw new InvalidPayloadError();

      const countryPopulation = await DateNagerService.getCountryPopulationHistory(countryCode);
      console.log(countryPopulation);

      res.status(200).json(responseBody({ success: true, message: 'GET_MSG', data: countryPopulation }));
    } catch (err) {
      next(err);
    }
  }

  async getCountryFlag(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(responseBody({ success: true, message: 'GET_MSG' }));
    } catch (err) {
      next(err);
    }
  }
}

export default new CountriesController();
