json.picture do
  json.partial! 'api/pictures/picture' , picture: @picture
end

json.user do
  json.partial! 'api/users/user', user: @picture.user
end

json.likes do
  @picture.likes.each do |like|
    json.set! like.id do
      json.partial! 'api/likes/likes', like: like
    end
  end
end
