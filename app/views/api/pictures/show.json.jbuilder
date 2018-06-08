json.picture do
  json.partial! 'api/pictures/picture' , picture: @picture
end

json.author do
  json.extract! @picture.user, :username
end
