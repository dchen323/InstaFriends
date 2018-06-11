import {combineReducers} from 'redux';
import entitiesReducer from "./entities_reducer";
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import UIReducer from './ui_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: UIReducer
});
