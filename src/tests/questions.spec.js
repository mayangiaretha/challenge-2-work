import chai from 'chai';
const { expect } = chai;
import { BaseTest } from './index.spec.js';


describe('Test the questions feature',  function() {
  let questionId;
  beforeEach(async function () {
    const createdQuestion = {
      title: "Aretha",
      description: "who is aretha"
    }

    const newQuestion = await BaseTest.post('questions').send(createdQuestion);
    questionId = newQuestion.body.question.id

  });

  it('Should get all questions', async () => {
    const response = await BaseTest.get('questions').send({});
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');

  });

  it('Should get one question with an id', async () =>{
    const response = await BaseTest.get(`questions/${questionId}`).send({})
    expect(response.status).to.equal(200);
    expect(response.body.question.title).to.equal("Aretha")
    expect(response.body.question.id).to.equal(questionId)
  });

  it('Should return an error message when an invalid id is passed', async () =>{
    const response = await BaseTest.get(`questions/invalid_id`).send({})
    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal("question does not exist please check id")
  });


  it('Should update a question', async () => {
    const response = await BaseTest.put(`questions/${questionId}`).send({
      title: "how hard is programming",
      description: "give a detailed answer"
    });
    expect(response.status).to.equal(201);

  });
  it('Should create a question', async () => {
    const response = await BaseTest.post('questions').send({
      title: "create question 3",
      description: "answer to qn 3"

    });
    expect(response.status).to.equal(201);
    expect(response.body).to.include({message: "the question has been created"})
  });

  it('Should delete a user', async ()=>{
      const response = await BaseTest.delete(`questions/${questionId}`)
      expect(response.status).to.equal(204)
  })
});
