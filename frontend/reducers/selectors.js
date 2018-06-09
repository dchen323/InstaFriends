export const sortPictures = pictures => {
  let values = Object.values(pictures);
  values = values.sort((a,b) => a.createdAt < b.createdAt);
  return values;
};
