class Api::LikesController < ApplicationController
  before_action :require_login

  def create
    @like = Like.new(params[:picture_id])
    @like.user_id = current_user.id
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @picture.destroy
    render :show
  end

end
