import { Router } from 'express';
import httpErrorMiddleware from '../middlewares/httpErrorMiddleware';
import URLS from '../config/constants/URLS';
import CountriesController from '../controllers/CountriesController';

const countriesRouter = Router();

// Example
// router.use('/', userRouter);

countriesRouter.use(URLS.ENDPOINTS.COUNTRIES, CountriesController.getCountriesAvailable);
countriesRouter.use(URLS.ENDPOINTS.COUNTRY_DETAILS, CountriesController.getCountrySpecificDetails);
countriesRouter.use(URLS.ENDPOINTS.COUNTRY_POPULATION, CountriesController.getCountryPopulationHistory);

export default countriesRouter;
