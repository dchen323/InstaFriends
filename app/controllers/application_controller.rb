class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_token
  end

  def logout
    current_user.reset_token
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless current_user
      render json: ["You must be logged in."] , status: 403
    end
  end

  def authenticate_user
    unless current_user.id == Picture.find(params[:id]).user.id
      render json: ["You do not own this entity"], status: 403
    end
  end
end
