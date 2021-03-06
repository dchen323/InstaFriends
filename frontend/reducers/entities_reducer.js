import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import picturesReducer from "./pictures_reducer";
import likesReducer from "./likes_reducer";
import commentsReducer from "./comments_reducer";
import followedReducer from "./followed_reducer";
import followingReducer from "./following_reducer";
import followerReducer from "./follower_reducer";
import searchReducer from "./search_reducer";
import { commenterReducer } from "./commenter_reducer";

export default combineReducers({
  users: usersReducer,
  pictures: picturesReducer,
  likes: likesReducer,
  comments: commentsReducer,
  followed: followedReducer,
  following: followingReducer,
  followers: followerReducer,
  commentAuthor: commenterReducer,
  searchList: searchReducer
});
