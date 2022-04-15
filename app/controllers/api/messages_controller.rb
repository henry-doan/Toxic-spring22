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
    @message = @current_user.messages.new(title: params[:title], body: params[:body] )

    file = params[:image]

    if file && file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(
          file, public_id: file.original_filename, secure: true
        )
        @message.image = cloud_image['secure_url']
        if @message.save 
          render json: @message
        else 
          render json: { errors: @message.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else 
      if @message.save 
      
        render json: @message
      else 
        render json: { errors: @message.errors.full_messages }, status: 422
      end
    end
  end

  def update
    
    @message.title = params[:title] ? params[:title] : @message.title
      @message.body = params[:body] ? params[:body] : @message.body
      @message.location = params[:location] ? params[:location] : @message.location
  
      file = params[:file]
  
      if file && file != ''
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, public_id: file.original_filename, secure: true
          )
          @message.image = cloud_image['secure_url']
          if @message.save 
            render json: @message
          else 
            render json: { errors: @message.errors.full_messages }, status: 422
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else 
        if @message.save 
          render json: @message
        else 
          render json: { errors: @message.errors.full_messages }, status: 422
        end
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
