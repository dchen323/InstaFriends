json.picture do
  json.partial! 'api/pictures/picture' , picture: @picture
end

json.author do
  json.extract! @picture.user, :username
end

json.comment do
  @picture.comments.each do |comment|
    json.set! comment.id do
      #
    end
  end
end
