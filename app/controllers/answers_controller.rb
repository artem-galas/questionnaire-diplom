class AnswersController < ApplicationController

  def update
    params_answer.each do |id|
      Answer.increment_counter(:answer_count, id)
    end
    render nothing:true, status: :ok
  end

  private

  def params_answer
    params.require(:answers)
  end

end
