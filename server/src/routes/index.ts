import { Router } from 'express';
import httpErrorMiddleware from '../middlewares/httpErrorMiddleware';
import countriesRouter from './countriesRoutes';

const router = Router();

// Example
// router.use('/', userRouter);

router.use('/', countriesRouter);

router.use(httpErrorMiddleware);

export default router;
