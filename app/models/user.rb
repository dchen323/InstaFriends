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

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :name, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, :session_token, uniqueness: true
  before_validation :ensure_session_token

  has_many :pictures, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :follows

  has_many :followed,
    class_name: 'Follow',
    foreign_key: :followed_id

  has_many :followers,
    through: :follows,
    source: :user

  has_many :following,
    through: :followed,
    source: :followed_user

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def reset_token
    generate_unique_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  private
  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end

    self.session_token
  end

end
