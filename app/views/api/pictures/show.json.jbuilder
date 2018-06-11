json.pictures do
  json.partial! 'api/pictures/picture' , picture: @picture
end

json.users do
    json.set! @picture.user.id do
      json.partial! 'api/users/user', user: @picture.user
    end
end

json.likes do
  @picture.likes.each do |like|
    json.set! like.id do
      json.partial! 'api/likes/likes', like: like
    end
  end
end
