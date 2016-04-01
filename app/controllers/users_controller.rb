class UsersController < ApplicationController
  before_action :authenticate_user!

  def profile
    p "*" *100
    p current_user
    p "*" *100
  end

end
