class Api::ToxicsController < ApplicationController
  before_action :set_user
  before_action :set_toxic, only: [:show, :update, :destroy]
  
  def index
    render json: @current_user.toxics
  end

  def show
    render json: @toxic
  end

  def create
    @toxic = @current_user.toxics.new(toxic_params)
    if @toxic.save
      render json: @toxic
    else
      render json: { errors: @toxic.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @toxic.update(toxic_params)
      render json: @toxic
    else
      render json: { errors: @toxic.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @toxic.destroy
    render json: { message: 'Toxicity Removed' }
  end

  private 

    def set_toxic
      @toxic = @current_user.toxics.find(params[:id])
    end

    def set_user
      @current_user = User.find(params[:user_id])
    end

    def toxic_params
      params.require(:toxic).permit(:deletes_in, :desc, :images, :location)
    end
end
