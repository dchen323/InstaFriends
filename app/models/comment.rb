class Comment < ApplicationRecord
  validates :user_id, :picture_id, :body, presence: true

  belongs_to :user
  belongs_to :picture


end
