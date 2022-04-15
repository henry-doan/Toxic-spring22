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

    @note = @current_user.notes.new(title: params[:title], body: params[:body] )

    file = params[:image]

    if file && file != '' && file != 'null'
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(
          file, public_id: file.original_filename, secure: true
        )
        @note.image = cloud_image['secure_url']
        if @note.save 
          render json: @note
        else 
          render json: { errors: @note.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else 
      if @note.save 
      
        render json: @note
      else 
        render json: { errors: @note.errors.full_messages }, status: 422
      end
    end
  end

  def update

    @note.title = params[:title] ? params[:title] : @note.title
    @note.body = params[:body] ? params[:body] : @note.body
    

    file = params[:image]

    if file && file != '' && file != 'undefined'
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(
          file, public_id: file.original_filename, secure: true
        )
        @note.image = cloud_image['secure_url']
        if @note.save 
          render json: @note
        else 
          render json: { errors: @note.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else 
      if @note.save 
        render json: @note
      else 
        render json: { errors: @note.errors.full_messages }, status: 422
      end
    end
  end

  def destroy
    @note.destroy
    render json: { note: 'Note Removed' }
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

