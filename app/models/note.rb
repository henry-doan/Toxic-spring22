class Note < ApplicationRecord
  belongs_to :User

  validates :title, :body, :image, presence: true
end