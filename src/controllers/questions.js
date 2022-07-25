import { questions } from '../db/db';
import { v4 as uuidv4 } from 'uuid';

class QuestionController {
  static async getAllQuestions(req, res) {
    try {
      return res.status(200).json(questions);
    } catch (error) {
      console.log(error.message);
    }
  }

  static createAQuestion(req, res) {
    try {
      const { title, description } = req.body;

      const createAQuestion = { id: uuidv4(), title, description };
      questions.push(createAQuestion);

      return res.status(201).json({
        question: createAQuestion,
        message: 'the question has been created',
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  static getAQuestion(req, res) {
    try {
      const { id } = req.params;

      const foundQuestion = questions.find((question) => question.id === id);
      if (!foundQuestion) {
        return res
          .status(200)
          .json({ error: 'question does not exist please check id' });
      }
      return res.json({ question: foundQuestion });
    } catch (error) {
      console.log(error.message);
    }
  }

  static upDated(req, res) {
    try {
      const { id } = req.params;

      const { title, description } = req.body;

      const updatedQuestion = questions.find((question) => question.id === id);

      if (!updatedQuestion) {
        return res.status(201).json({ error: 'question does not exist ' });
      }

      if (title) updatedQuestion.title = title;

      if (description) updatedQuestion.description = description;

      return res
        .status(201)
        .json({ updatedQuestion, message: 'updated the question' });
    } catch (error) {
      console.log(error.message);
    }
  }

  static deleteQuestion(req, res) {
    try {
      const { id } = req.params;

      const deletedQuestion = questions.findIndex(
        (question) => question.id === id
      );
      if (!deletedQuestion)
        return res.status(400).json({ message: 'Question not found' });
      if (deletedQuestion) {
        questions.splice(deletedQuestion, 1);
        return res.status(201).json({ message: 'Question deleted' });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default QuestionController;
