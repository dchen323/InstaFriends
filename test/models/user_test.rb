# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  img_url         :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
