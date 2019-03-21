# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :user_id, :followed_id, presence: true
  validates :followed_id, uniqueness: {scope: :user_id}

  belongs_to :user

  belongs_to :followed_user,
    class_name: 'User',
    foreign_key: :followed_id

end
