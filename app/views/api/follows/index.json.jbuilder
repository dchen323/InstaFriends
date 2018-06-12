json.users do
  @followers.each do |follower|
    json.set! follower.id do
      json.partial! 'api/users/user', user: follower
    end
  end
end

json.pictures do
  @followers.each do |follower|
    follower.pictures.each do |picture|
      json.set! picture.id do
        json.partial! 'api/pictures/picture', picture: picture
      end
    end
  end
end

json.comments do
  @followers.each do |follower|
    follower.pictures.each do |picture|
      picture.comments. each do |comment|
        json.set! comment.id do
          json.partial! 'api/comments/comments', comment: comment
        end
      end
    end
  end
end
