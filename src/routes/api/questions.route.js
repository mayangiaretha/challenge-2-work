import { Router } from 'express';
import QuestionController from '../../controllers/questions';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

router.get('/', QuestionController.getAllQuestions);

router.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
    }),
  }),
  QuestionController.createAQuestion
);

router.get('/:id', QuestionController.getAQuestion);

router.put(
  '/:id',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().optional(),
      description: Joi.string().optional(),
    }),
  }),

  QuestionController.upDated
);

router.delete('/:id', QuestionController.deleteQuestion);

export default router;
