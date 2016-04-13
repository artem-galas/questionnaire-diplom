'use strict';

angular.module('questionary')
  .factory('QuestionService', QuestionService);

function QuestionService($http) {
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
  service.sendFormQuestionary = sendFormQuestionary;

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

  function sendFormQuestionary(data) {
    console.log ('data= ', data);
    //console.log ('dataJSON= ', angular.toJSON(data));
    //console.log ('dataJson= ', angular.toJson(data));
    //data = angular.toJson(data);
    $http.post('/users/questionaries', data).then(function(responce){
      console.log (responce);
    });
  }
}
