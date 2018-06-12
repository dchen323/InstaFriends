json.follows do
  json.partial! 'api/follows/follows', follow: @follow
end

json.followed do
  json.partial! 'api/follows/follows', follow: @follow
end
