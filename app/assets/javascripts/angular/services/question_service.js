'use strict';

angular.module('questionary')
  .factory('QuestionService', QuestionService);

function QuestionService($http, $q, $stateParams) {
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
    service.questionary.questions.push({
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
    let questionary = {
      questionary: data
    };
    console.log ('Questionary', questionary);

    questionary.questionary.questions_attributes = {};
    questionary.questionary.questions.forEach(function(question, i){
      console.log ('QUEST',question);
      if (question.id) {
        var index = question.id
      }
      else {
        var index = i.toString()
      }
      questionary.questionary.questions_attributes[index] = question;

      questionary.questionary.questions_attributes[index].answers_attributes =
        questionary.questionary.questions_attributes[index].answers;
      delete questionary.questionary.questions_attributes[index].answers;
    });
    delete questionary.questionary.questions;

    if ($stateParams.id) {
      let url = `/users/questionaries/${$stateParams.id}`;

      console.log ('data', data);

      $http.patch(url, questionary).then(function(responce){
        console.log (responce.data);
      }, function(error){
        console.log (error);
      });
    }
    else {
      let url = `/users/questionaries/`;
      $http.post(url, questionary).then(function(responce){
        console.log (responce.data);
      }, function(error){
        console.log (error);
      });
    }

    //$http.post('/users/questionaries', questionary).then(function(responce){
    //  console.log (responce.data);
    //}, function(error){
    //  console.log (error);
    //});
  }

  function getQuestionary(id) {
    if (service.questionaryEdit) {
      return $q.resolve(service.questionaryEdit)
    } else {
      return $http.get(`/users/questionaries/${id}/edit.json`).then(function (responce) {
        service.questionaryEdit = responce.data;
        service.questionary = service.questionaryEdit;
        console.log('ServiceQuestionary= ', service.questionaryEdit);
        return service.questionaryEdit
      });
    }
  }
}
