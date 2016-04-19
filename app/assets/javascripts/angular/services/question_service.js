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
    let index = service.questionary.questions.indexOf(question);
    service.questionary.questions.splice(index, 1);
    if (question.id) {
      service.questionary.questions.push({
        id: question.id,
        _destroy: '1'
      });
    }
    console.log (service.questionary.questions);
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
      questionary: angular.copy(data)
    };

    questionary.questionary.questions_attributes = {};
    questionary.questionary.questions.forEach(function(question, i){
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

    // var url = $stateParams.id ? `/users/questionaries/${$stateParams.id}` : `/users/questionaries/`;

    if ($stateParams.id) {
      let url = `/users/questionaries/${$stateParams.id}`;
      $http.patch(url, questionary).then(function(responce){
      }, function(error){
        console.log (error);
      });
    }
    else {
      let url = `/users/questionaries/`;
      $http.post(url, questionary).then(function(responce){
      }, function(error){
        console.log (error);
      });
    }
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
