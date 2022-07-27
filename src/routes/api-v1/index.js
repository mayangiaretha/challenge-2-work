import { Router } from 'express';
import questionsRoute from './questions.route';
import answersRoute from './answers.route';

const routes = Router();

routes.use('/questions', questionsRoute);
routes.use('/answers', answersRoute);

export default routes;
