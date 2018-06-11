import * as APIUtil from '../utils/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


export const receiveComment = ({comments, user,picture}) => ({
  type: RECEIVE_COMMENT,
  comments,user,picture
});

export const postComment = comment => dispatch => (
  APIUtil.postComment(comment)
    .then(res => dispatch(receiveComment(res)))
);
