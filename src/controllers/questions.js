import { questions } from '../db/db';

class QuestionController {
  static async getAllQuestions(req, res) {
    try {
      return res.status(200).json(questions);
    } catch (error) {
      console.log(e.message);
    }
  }
}

export default QuestionController
