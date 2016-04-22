class AnswersController < ApplicationController

  def update
    params_answer.each do |id|
      Answer.increment_counter(:answer_count, id)
    end
    render json: 200
  end

  private

  def params_answer
    params.require(:answers)
  end

end
