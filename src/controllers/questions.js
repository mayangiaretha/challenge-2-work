import { answers, questions } from '../db/db';
import { v4 as uuidv4 } from 'uuid';

class QuestionController {
  static getAllQuestions(req, res) {
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
          .status(400)
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
      if (!deletedQuestion) {
        return res.status(400).json({ message: 'Question not found' });
      }
      questions.splice(deletedQuestion, 1);
      return res.status(204).json({ message: 'question deleted ' });
    } catch (error) {
      console.log(error.message);
    }
  }
  //post an answer

  static createAnAnswer(req, res) {
    try {
      const { qnsId } = req.params;
      const { answer } = req.body;

      const foundQuestion = questions.find((question) => question.id === qnsId);
      if (!foundQuestion) {
        return res
          .status(400)
          .json({ error: 'question does not exist please check id' });
      }


      const createAnAnswer = { id: uuidv4(), questionId: qnsId, answer: answer };
      answers.push(createAnAnswer);

      return res.status(201).json({
        answer: createAnAnswer,
        message: 'Answer has been created',
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  static getAnAnswer(req, res) {
    try {
      const { id } = req.params;

      const foundAnswer = answers.filter((answer) => answer.questionId === id);

      if (!foundAnswer) {
        res
          .status(400)
          .json({ message: 'Answer to this question does not exist' });
      }
      if (foundAnswer) {
        res.status(200).json(foundAnswer);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default QuestionController;
