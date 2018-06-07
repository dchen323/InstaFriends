json.partial! 'api/users/user', user: @user

json.pictures do
  @user.pictures.each do |picture|
    json.set! picture.id do
      json.partial! 'api/pictures/picture', picture: picture
    end
  end
end
