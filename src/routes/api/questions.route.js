import { Router } from "express";
import QuestionController from "../../controllers/questions";

const router =Router();

router.get('/', QuestionController.getAllQuestions);

export default router
