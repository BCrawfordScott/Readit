class Api::UsersController < ApplicationController

  before_action :ensure_logged_in, except: [:create]

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if confirm_user && @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])

    if confirm_user
      @user.destroy
      render json: ["User successfully destroyed"]
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def edit
    @user = User.find(params[:id])
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

  def confirm_user
    if current_user == @user
      true
    else
      # debugger
      @user.errors[:unauthorized!] << "Nice try! You can't do that."
      false
    end
  end
end
