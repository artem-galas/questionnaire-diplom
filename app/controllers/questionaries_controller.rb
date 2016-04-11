class QuestionariesController < ApplicationController

  def new
    @questionary = Questionary.new
    @questionary.questions.new
  end

  def create
    q = current_user.questionaries.create(questionary_params)
    render json: q
  end

  def index
    @q = current_user.questionaries
    # render json: q, include: :questions
  end

  def show
    @q = Questionary.find(params[:id])
    # render json: q, include: :questions
  end

  def edit
    @q = current_user.questionaries.find(params[:id])
  end


  private
  def questionary_params
    params.require(:questionary).permit(:title, :questions_attributes)
  end
end
