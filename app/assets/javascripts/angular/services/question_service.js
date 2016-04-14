'use strict';

angular.module('questionary')
  .factory('QuestionService', QuestionService);

function QuestionService($http, $q) {
  let service = this;

  service.question = [{
    text: '',
    answers: [{
      text: ''
    }]
  }];

  service.questionary = {
    title: '',
    questions: service.question
  };


  service.addQuestion = addQuestion;
  service.removeQuestion = removeQuestion;
  service.addAnswer = addAnswer;
  service.removeAnswer = removeAnswer;
  service.sendFormQuestionary = sendFormQuestionary;
  service.getQuestionary = getQuestionary;

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

  function sendFormQuestionary() {
    let questionary = {
      questionary: service.questionary
    };
    console.log ('Questionary', questionary);
    $http.post('/users/questionaries', questionary).then(function(responce){
      console.log (responce.data);
    }, function(error){
      console.log (error);
    });
  }

  function getQuestionary(id) {
    if (service.questionaryEdit) {
      return $q.resolve(service.questionaryEdit)
    } else {
      return $http.get(`/users/questionaries/${id}/edit.json`).then(function (responce) {
        service.questionaryEdit = responce.data;
        console.log('ServiceQuestionary= ', service.questionaryEdit);
        return service.questionaryEdit
      });
    }
  }
}
