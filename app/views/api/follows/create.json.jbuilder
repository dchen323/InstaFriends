json.followed do
  json.partial! 'api/follows/follows', follow: @follow
end

json.follower do
  json.extract! @follow.user, :id, :username, :img_url
end