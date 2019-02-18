json.users do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

# json.users do
#   @user.following.each do |follower|
#     json.set! follower.id do
#       json.partial! 'api/users/user', user: follower
#     end
#   end
# end

json.follows do
  @user.follows.each do |follow|
    json.set! follow.id do
      json.partial! 'api/follows/follows', follow: follow
    end
  end
end

json.followed do
  @user.followed.each do |follow|
    json.set! follow.id do
      json.partial! 'api/follows/follows', follow: follow
    end
  end
end

json.pictures do
  @user.following.each do |follower|
    follower.pictures.each do |picture|
      json.set! picture.id do
        json.partial! 'api/pictures/picture', picture: picture
      end
    end
  end
end

json.comments do
  @user.following.each do |follower|
    follower.pictures.each do |picture|
      picture.comments. each do |comment|
        json.set! comment.id do
          json.partial! 'api/comments/comments', comment: comment
        end
      end
    end
  end
end

json.likes do
  @user.following.each do |follower|
    follower.pictures.each do |picture|
      picture.likes.each do |like|
        json.set! like.id do
          json.partial! 'api/likes/likes', like: like
        end
      end
    end
  end
end

json.comments_author do
  @user.following.each do |follower|
    follower.pictures.each do |picture|
      picture.comments.each do |comment|
        json.set! comment.user.id do
          json.extract! comment.user, :id,:username
        end
      end
    end
  end
end

json.following do
  @user.following.each do |followed_person|
    json.set! followed_person.id do
      json.extract! followed_person, :id, :username, :img_url
    end
  end
end
