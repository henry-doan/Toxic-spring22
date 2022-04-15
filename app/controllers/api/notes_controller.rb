class Api::NotesController < ApplicationController
  before_action :set_user
  before_action :set_note, only: [:show, :update, :destroy]
  
  def index
    render json: @current_user.notes
  end

  def show
    render json: @note
  end

  def create
    @note = @current_user.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'Note Removed' }
  end

  private 

    def set_note
      @note = @current_user.notes.find(params[:id])
    end

    def set_user
      @current_user = User.find(params[:user_id])
    end

    def note_params
      params.require(:note).permit(:title, :body, :image)
    end
end

