class Api::PicturesController < ApplicationController
  before_action :require_login
  before_action :authenticate_user, only: [:create, :update, :destroy]

  def index
  end

  def show
    @picture = Picture.find_by(user_id: params[:user_id],id: params[:id])
    unless @picture
      render @picture.errors.full_messages, status: 404
    end
  end

  def create
    @picture = Picture.new(picture_parmas)
    @picture[:user_id] = current_user.id
    if @picture.save
      render json: @picture
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def update
    @picture = Picture.find(params[:id])
    if @picture.update(picture_params)
      render json: @picture
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def destroy
    @picture = Picture.find(params[:id])
    @picture.destroy
  end

  private

  def picture_params
    params.require(:picture).permit(:user_id,:img_url,:caption)
  end

end
