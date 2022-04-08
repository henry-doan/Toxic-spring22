class Api::UsersController < ApplicationController
  before_action :configure_permitted_paramters, if: :devise_controller?

  protected
    def configure_permitted_paramters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :profile_name, :email])
    end
end
