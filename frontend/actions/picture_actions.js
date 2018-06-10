import * as APIUtil from '../utils/picture_api_util';
export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const RECEIVE_PICTURES = 'RECEIVE_PICTURES';


export const receivePicture = ({picture, author}) => ({
  type: RECEIVE_PICTURE,
  picture, author
});


export const fetchPicture = (userId, id) => dispatch => (
  APIUtil.fetchPicture(userId,id)
    .then(res => dispatch(receivePicture(res)))
);

export const uploadPicture = picture => dispatch => (
  APIUtil.uploadPicture(picture)
    .then(res => dispatch(receivePicture(res)))
);

export const updatePicture = picture => dispatch => (
APIUtil.updatePicture(picture)
  .then(res => dispatch(receivePicture(res)))
);
