import { Router } from 'express';
import AnswersController from '../../controllers/answers';

const router = Router();

router.get('/', AnswersController.getAllAnswers);


export default router;
