class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render json: @user
    else
      render json: {errors: "Invalid Credentials", status: 422}
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {errors: "404 Not found", status: 404}
    end
  end
end
