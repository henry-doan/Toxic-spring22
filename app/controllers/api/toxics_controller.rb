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
    @toxic = @current_user.toxics.new(desc: params[:desc], deletes_in: params[:deletes_in], location: params[:location])

    file = params[:image]
   
      if file && file != '' && file != 'null' 
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, public_id: file.original_filename, secure: true
          )
          @toxic.image = cloud_image['secure_url']
          if @toxic.save 
            render json: @toxic
          else 
            render json: { errors: @toxic.errors.full_messages }, status: 422
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else 
        if @toxic.save 
        
          render json: @toxic
        else 
          render json: { errors: @toxic.errors.full_messages }, status: 422
        end
      end
      
  end

  def update
    
    @toxic.deletes_in = params[:deletes_in] ? params[:deletes_in] : @toxic.deletes_in
      @toxic.desc = params[:desc] ? params[:desc] : @toxic.desc
      @toxic.location = params[:location] ? params[:location] : @toxic.location
 

      file = params[:image]
      if file && file != '' && file != 'undefined'
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, public_id: file.original_filename, secure: true
          )
          @toxic.image = cloud_image['secure_url']
          if @toxic.save 
            render json: @toxic
          else 
            render json: { errors: @toxic.errors.full_messages }, status: 422
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else 
        if @toxic.save 
          render json: @toxic
        else 
          render json: { errors: @toxic.errors.full_messages }, status: 422
        end
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
      params.require(:toxic).permit(:deletes_in, :desc, :image, :location)
    end
end

