class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid password or username"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
    else
      render json: ["No one is logged in..."], status: 422
    end
  end
end
