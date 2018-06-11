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
