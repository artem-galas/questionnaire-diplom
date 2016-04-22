class QuestionsController < ApplicationController

  def index
    q = current_user.questionaries.find(params[:questionary_id])
    render json: q, include: :questions
  end

  def create
    q = current_user.questionaries.find(params[:questionary_id])
    question = q.questions.create(question_params)
    render json: q, include: :questions
  end

  private
  def question_params
    params.require(:question).permit(:text)
  end

end
