class Picture < ApplicationRecord
  validates :img_url, presence: true;

  belongs_to :user
  has_many :likes, dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :user
end
