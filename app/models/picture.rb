class Picture < ApplicationRecord
  validates :author_id, :img_url, presence: true;

  belongs_to :user
end
