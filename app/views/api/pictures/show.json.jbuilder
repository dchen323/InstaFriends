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

json.comments do
  @picture.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comments'. comment: comment
    end
  end
end
