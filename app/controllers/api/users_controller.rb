class Api::UsersController < ApplicationController
  # before_action :configure_permitted_paramters, if: :devise_controller?

  # protected
  #   def configure_permitted_paramters
  #     devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :profile_name, :email])
  #   end
    def update
      user = User.find(params[:id])
      user.fname = params[:fname] ? params[:fname] : user.fname
      user.lname = params[:lname] ? params[:lname] : user.lname
      user.email = params[:email] ? params[:email] : user.email
      user.age = params[:age] ? params[:age] : user.age
  
      file = params[:file]
  
      if file && file != ''
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, public_id: file.original_filename, secure: true
          )
          user.image = cloud_image['secure_url']
          if user.save 
            render json: user
          else 
            render json: { errors: user.errors.full_messages }, status: 422
          end
        rescue => e
          render json: { errors: e }, status: 422
        end
      else 
        if user.save 
          render json: user
        else 
          render json: { errors: user.errors.full_messages }, status: 422
        end
      end
      
    end

end
