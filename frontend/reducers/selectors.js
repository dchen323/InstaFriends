export const sortPictures = pictures => {
  let values = Object.values(pictures);
  values = values.sort((a,b) => a.createdAt < b.createdAt);
  return values;
};

export const sortLikes = (likes, sessionId,pictureId) => {
  let values = Object.values(likes);
  return values.find((like) => like.userId === sessionId &&
      like.pictureId === pictureId);
};

export const sortComments = (comments, pictureId ) => {
  let values = Object.values(comments);
  values = values.filter(comment => comment.pictureId === pictureId);
  values = values.sort((a,b) => a.createdAt < b.createdAt);
  return values;
};

export const countLikes = (likes , pictureId) => {
  let values = Object.values(likes);
  return values.filter(like => like.pictureId === pictureId).length;
};

export const filterFollows = (follows, userId) => {
  let values = Object.values(follows);
  return values.filter(follow => follow.followedId === userId);
};
