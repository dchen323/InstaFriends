import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import picturesReducer from './pictures_reducer';
import likesReducer from './likes_reducer';

export default combineReducers({
  users: usersReducer,
  pictures: picturesReducer,
  likes: likesReducer
});
