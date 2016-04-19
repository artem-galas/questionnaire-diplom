class QuestionariesController < ApplicationController

  def new
    @questionary = Questionary.new
    @questionary.questions.new
  end

  def create
    q = current_user.questionaries.create(questionary_params)
    # Create recursive questions and answers.
    # questionsParams = params[:questionary][:questions]
    # questionsParams.each do |questionParams|
    #   question = q.questions.create(text: questionParams['text'])
    #   questionParams['answers'].each do |answerParams|
    #     question.answers.create(text: answerParams['text'])
    #   end
    # end

    p "***" *10
    p questionary_params
    p "***" *10

    render json: q,
           include: {
               questions: {include: :answers}
           }
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
    respond_to do |format|
      format.html
      format.json {
        render json: @q,
               include: {
                   questions: {include: :answers}
               }
      }
    end
  end

  def update
    q = Questionary.find(params[:id])
    q.update(questionary_params)
    render json: q,
          include: {
              questions: {include: :answers}
          }
  end


  private
  def questionary_params
    params.require(:questionary).permit(:title, questions_attributes: [:id, :text, :_destroy, answers_attributes:[:id,:text]] )
  end
end
