json.comments do
  json.partial! 'api/comments/comments', comment: @comment
end

json.comments_author do
  json.set! @comment.user.id do
    json.extract! @comment.user, :id, :username
  end
end
