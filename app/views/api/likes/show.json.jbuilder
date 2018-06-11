json.likes do
  json.partial! 'api/likes/likes' , like: @like
end

json.user do
  json.partial! 'api/users/user', user: @like.user
end

json.picture do
  json.partial! 'api/pictures/picture', picture: @like.picture
end
