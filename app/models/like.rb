# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  picture_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, :picture_id, presence: true
  validates :picture_id, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :picture
end
