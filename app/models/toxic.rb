class Toxic < ApplicationRecord
  belongs_to :user

  # validates :deletes_in, :location, presence: true
end
