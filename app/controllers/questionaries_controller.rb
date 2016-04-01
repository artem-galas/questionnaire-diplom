class QuestionariesController < ApplicationController

  def new
    @questionary = Questionary.new
    @questionary.questions.new
  end

  def create
    q = current_user.questionaries.create(questionary_params)

    p "**" *10
    p "**" *10
    p questionary_params
    p "**" *10
    p "**" *10

    # q.questions.create(text: params)
    render json: q
  end

  def index
    q = current_user.questionaries
    render json: q
  end

  def show
    q = current_user.questionaries.find(params[:id])
    render json: q
  end


  private
  def questionary_params
    params.require(:questionary).permit(:title, :questions_attributes)
  end
end
