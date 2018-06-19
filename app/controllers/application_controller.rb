class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    render json: ["You must be logged in to do that!"], status: 422 unless logged_in?
  end

  def ensure_logged_out; end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    session[:session_token] = nil
    current_user.try(:reset_session_token!)
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

end
