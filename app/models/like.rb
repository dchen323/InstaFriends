class Like < ApplicationRecord
  validates :user_id, picture_id:, presence: true
  validates :picture_id, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :picture
end
