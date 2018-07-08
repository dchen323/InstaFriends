import * as APIUtil from '../utils/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


export const receiveComment = ({comments,commentsAuthor}) => ({
  type: RECEIVE_COMMENT,
  comments,commentsAuthor
});

export const removeComment = ({comments}) => ({
  type: REMOVE_COMMENT,
  comments
});

export const postComment = comment => dispatch => (
  APIUtil.postComment(comment)
    .then(res => dispatch(receiveComment(res)))
);

export const deleteComment = comment => dispatch => (
  APIUtil.deleteComment(comment)
    .then(res => dispatch(removeComment(res)))
);
