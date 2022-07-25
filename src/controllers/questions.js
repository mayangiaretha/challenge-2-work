import { questions } from '../db/db';
import { v4 as uuidv4 } from 'uuid';

class QuestionController {
  static async getAllQuestions(req, res) {
    try {
      return res.status(200).json(questions);
    } catch (error) {
      console.log(e.message);
    }
  }
  static createAQuestion(req, res) {
    const { title, description } = req.body;

    const createAQuestion = { id: uuidv4(), title, description };
    questions.push(createAQuestion);

    res.status(201).json({
      question: createAQuestion,
      message: 'the question has been created',
    });
  }
  static getAQuestion(req, res) {
    const { id } = req.params;

    const foundQuestion = questions.find((question) => question.id === id);
    if (!foundQuestion) {
      return res
        .status(200)
        .json({ error: 'question does not exist please check id' });
    }
    res.send(foundQuestion);
  }
}

export default QuestionController;
