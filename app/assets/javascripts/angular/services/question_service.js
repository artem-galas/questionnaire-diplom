'use strict';

angular.module('questionary')
  .factory('QuestionService', QuestionService);

function QuestionService($http, $q, $stateParams) {
  let service = this;

  service.question = [{
    text: '',
    answers: [{
      text: ''
    }],
    type_question: 'one_select'
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
  service.getQuestionaryShow = getQuestionaryShow;
  service.answerSubmit = answerSubmit;

  return service;

  function addQuestion() {
    service.questionary.questions.push({
      text:'',
      answers:[{
        text:''
      }],
      type_question: 'one_select'
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
  }

  function addAnswer(question) {
    question.answers.push({
      text: ''
    });
  }

  function removeAnswer(question, answer) {
    let index = question.answers.indexOf(answer);
    question.answers.splice(index, 1);
    if (answer.id) {
      question.answers.push({
        id: answer.id,
        _destroy: '1'
      });
    }
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
      return $http.patch(url, questionary).then(function(responce){
        return responce.data
      }, function(error){
        console.log (error);
      });
    }
    else {
      let url = `/users/questionaries/`;
      return $http.post(url, questionary).then(function(responce){
        return responce.data
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

  function getQuestionaryShow(id) {
    if (service.questionaryEdit) {
      return $q.resolve(service.questionaryEdit)
    } else {
      return $http.get(`/questionaries/${id}.json`).then(function (responce) {
        service.questionaryShow = responce.data;
        service.questionary = service.questionaryShow;
        console.log('questionaryShow= ', service.questionaryShow);
        return service.questionaryShow
      });
    }
  }

  function answerSubmit(data) {
    console.log (data);
    $http.patch('/answers', data).then(function (responce) {
      console.log (responce);
    })
  }

}
