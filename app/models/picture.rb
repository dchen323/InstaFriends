class Picture < ApplicationRecord
  validates :img_url, presence: true;

  belongs_to :user
end
