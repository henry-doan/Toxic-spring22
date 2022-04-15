class Api::MessagesController < ApplicationController
  before_action :set_user
  before_action :set_message, only: [:show, :update, :destroy]
  
  def index
    render json: @current_user.messages
  end

  def show
    render json: @message
  end

  def create
    @message = @current_user.messages.new(message_params)
    if @message.save
      render json: @message
    else
      render json: { errors: @message.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: { errors: @message.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @message.destroy
    render json: { message: 'Message Removed' }
  end

  private 

    def set_message
      @message = @current_user.messages.find(params[:id])
    end

    def set_user
      @current_user = User.find(params[:user_id])
    end

    def message_params
      params.require(:message).permit(:title, :body, :image, :location)
    end
end
