class Api::FollowsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id
    if @follow.save
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render :create
  end

  private

  def follow_params
    params.require(:follow).permit(:followed_id)
  end
end
