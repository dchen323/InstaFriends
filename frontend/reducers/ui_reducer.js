import { combineReducers } from 'redux';
import {commenterReducer} from './commenter_reducer';

export default combineReducers({
  commentAuthor : commenterReducer
});
