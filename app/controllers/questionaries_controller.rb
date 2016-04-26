class QuestionariesController < ApplicationController

  def new
    @questionary = Questionary.new
    @questionary.questions.new
  end

  def create
    if q = current_user.questionaries.create(questionary_params)
      render nothing:true, status: :ok
    else
      render nothing:true, status: :internal_server_error
    end
  end

  def index
    @q = current_user.questionaries
    # render json: q, include: :questions
  end

  def show
    # @statistics = Statistic.new
    q = Questionary.find(params[:id])
    respond_to do |format|
      format.html
      format.json {
      render json: q,
             include: {
                 questions: {include: :answers}
             }
      }
    end
  end

  def edit
    q = current_user.questionaries.find(params[:id])
    respond_to do |format|
      format.html
      format.json {
        render json: q,
               include: {
                   questions: {include: :answers}
               }
      }
    end
  end

  def update
    q = Questionary.find(params[:id])
    if q.update(questionary_params)
      render nothing:true, status: :ok
    else
      render nothing:true, status: :bad_request
    end
  end

  def statistic
  end


  private
  def questionary_params
    params.require(:questionary).permit(:title, questions_attributes: [:id, :text, :type_question, :_destroy,
                                                                       answers_attributes:[:id, :text, :_destroy]] )
  end
end
