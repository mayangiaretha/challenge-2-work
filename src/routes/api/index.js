import { Router } from 'express';
import questionsRoute from './questions.route';

const routes = Router();

routes.use('/questions', questionsRoute);

export default routes;
