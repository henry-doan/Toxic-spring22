class Profile < ApplicationRecord
  validates :name, :user_name, presence: true 
end
