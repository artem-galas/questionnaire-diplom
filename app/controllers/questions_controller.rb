class QuestionsController < ApplicationController

  def index
    q = current_user.questionaries.find(params[:questionary_id])
    render json: q, include: :questions
  end

  def create
    q = current_user.questionaries.find(params[:questionary_id])
    if question = q.questions.create(question_params)
      render nothing:true, status: :ok
    else
      render nothing:true, status: :internal_server_error
    end
  end

  private
  def question_params
    params.require(:question).permit(:text)
  end

end
