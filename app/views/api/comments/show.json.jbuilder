json.comments do
  json.partial! 'api/comments/comments', comment: @comment
end

json.user do
  json.partial! 'api/users/user', user: @comment.user
end

json.picture do
  json.partial! 'api/pictures/picture', picture: @comment.picture
end
