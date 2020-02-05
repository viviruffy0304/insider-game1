class GamesController < ApplicationController

  def index
  end
  
  def new
    @user = User.new
  end

  def create
    User.create(user_params)
    @users = User.select("name")
  end

  private
  def user_params
    params.permit(:name)
  end
  

end
