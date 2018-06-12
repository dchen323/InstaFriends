# == Schema Information
#
# Table name: pictures
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  img_url    :string           not null
#  caption    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Picture < ApplicationRecord
  validates :img_url, presence: true;

  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :user

  has_many :commenters,
    through: :comments,
    source: :user
end
