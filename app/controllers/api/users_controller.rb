class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      redirect_to '/static_pages/root'
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :name, :password,:img_url)
  end
end
