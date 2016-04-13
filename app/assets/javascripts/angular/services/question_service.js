'use strict';

angular.module('questionary')
  .factory('QuestionService', QuestionService);

function QuestionService() {
  let service = this;
  service.question = [{
    text: '',
    answers: [{
      text: ''
    }]
  }];

  service.addQuestion = addQuestion;
  service.removeQuestion = removeQuestion;
  service.addAnswer = addAnswer;
  service.removeAnswer = removeAnswer;

  return service;

  function addQuestion() {
    service.question.push({
      text:'',
      answers:[{
        text:''
      }]
    });
  }

  function removeQuestion(question) {
    let index = service.question.indexOf(question);
    service.question.splice(index, 1);
  }

  function addAnswer(question) {
    question.answers.push({
      text: ''
    });
  }

  function removeAnswer(question, answer) {
    let index = question.answers.indexOf(answer);
    question.answers.splice(index, 1);
  }
}