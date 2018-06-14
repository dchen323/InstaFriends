class Api::LikesController < ApplicationController
  before_action :require_login

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :show
  end

  private

  def like_params
    params.require(:like).permit(:picture_id)
  end

end
