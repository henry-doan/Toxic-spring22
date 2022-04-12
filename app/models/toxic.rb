class Toxic < ApplicationRecord
  belongs_to :User

  validates :title, :body, :image, presence: true
end