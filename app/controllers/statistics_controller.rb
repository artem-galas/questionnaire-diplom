class StatisticsController < ApplicationController


  def create
    # s = Statistic.create(params)

    p"**" *100
    p statistic_params
    p"**" *100
    p"**" *100

    s = Questionary.find(params[:questionary_id]).statistic.create(statistic_params)
    render json: params
  end

  private

  def statistic_params
    params.require(:statistic).permit(:question)
  end

end
