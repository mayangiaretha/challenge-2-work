import { answers } from '../db/db';

class AnswersController {
  static getAllAnswers(req, res) {
    try {
      return res.status(200).json(answers);
    } catch (error) {
      console.log(error.message);
    }
  }
}


export default AnswersController;
