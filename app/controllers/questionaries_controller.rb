class QuestionariesController < ApplicationController

  def new
    @questionary = Questionary.new
  end

  def create
    q = current_user.questionaries.create(questionary_params)
    # Questionary.create(questionary_params.merge(user_id: current_user.id))
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
    params.require(:questionary).permit(:title)
  end
end
